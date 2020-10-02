import React, { Component } from "react";
import moment from "moment";
import {
  makeStyles,
  Button,
  Select,
  MenuItem,
  Input,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { CSVLink } from "react-csv";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { remove, clone, filter, map, flatMap, each } from "lodash";

import StyledModal from "./StyledModal";
import hasOverlap from "./Overlap";

import "./Dispatcher.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function idGen(init) {
  return function () {
    return init++;
  };
}

const nextId = idGen(0);

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    minWidth: "400px",
  },

  filterLabel: {
    display: "inline-block",
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    textAlign: "bottom",
  },
}));

const TaskSelect = ({ handleChange, value, classes }) => {
  return (
    <FormControl required className={classes.formControl}>
      <InputLabel>Task</InputLabel>
      <Select value={value} onChange={handleChange}>
        <MenuItem value="Pick Up">Pick Up</MenuItem>
        <MenuItem value="Drop Off">Drop Off</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </FormControl>
  );
};

const DriverFilter = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.filterLabel}>
        <label>Filter Drivers: </label>
      </div>
      <DriverSelect classes={classes} {...props} />
    </>
  );
};

const DriverSelect = ({ drivers, handleChange, value, disabled, classes }) => {
  return (
    <FormControl disabled={disabled} required className={classes.formControl}>
      <InputLabel>Driver</InputLabel>
      <Select value={value} onChange={handleChange}>
        {map(drivers, ({ value, display }) => (
          <MenuItem value={value}>{display}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const AlertDialog = ({ open, handleClose, handleOK, title, content }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{handleOK ? "Cancel" : "OK"}</Button>
        {handleOK && (
          <Button onClick={handleOK} color="primary" autoFocus>
            OK
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const StyledForm = ({
  drivers,
  filteredDriverId,
  handleSubmit,
  handleEventChange,
  handleDateChange,
  handleDelete,
  isEdit,
  currentEvent,
}) => {
  const classes = useStyles();
  const { driverId, task, start, end, location, description } = currentEvent;
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          value={start}
          minutesStep={60}
          onChange={handleDateChange("start")}
        />
        <KeyboardTimePicker
          margin="normal"
          value={end}
          minutesStep={60}
          onChange={handleDateChange("end")}
        />
      </MuiPickersUtilsProvider>
      <DriverSelect
        classes={classes}
        disabled={!!filteredDriverId}
        drivers={drivers}
        value={driverId}
        handleChange={handleEventChange("driverId")}
      />
      <TaskSelect
        value={task}
        classes={classes}
        handleChange={handleEventChange("task")}
      />
      <FormControl className={classes.formControl} required>
        <InputLabel>Description</InputLabel>
        <Input
          value={description}
          onChange={handleEventChange("description")}
        ></Input>
      </FormControl>
      <FormControl className={classes.formControl} required>
        <InputLabel>Location</InputLabel>
        <Input
          value={location}
          onChange={handleEventChange("location")}
        ></Input>
      </FormControl>
      <Button color="primary" onClick={handleSubmit}>
        {isEdit ? "Update" : "Add"}
      </Button>
      {isEdit && (
        <Button color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </>
  );
};

class Dispatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredDriverId: null,
      events: [],
      isModalOpen: false,
      isEdit: false,
      isAlertDialogOpen: false,
      overlapRanges: [],
      hasError: false,
    };
  }

  toggleModal = (event) => {
    this.setState({
      isEdit: !!event.driverId,
      currentEvent: {
        ...event,
        driverId: this.state.filteredDriverId || event.driverId,
      },
      isModalOpen: !this.state.isModalOpen,
    });
  };

  closeAlertDialog = () => {
    this.setState({
      isAlertDialogOpen: false,
      hasError: false,
      overlapRanges: [],
    });
  };

  handleEventChange = (field) => (e) => {
    this.setState({
      currentEvent: { ...this.state.currentEvent, [field]: e.target.value },
    });
  };

  handleDateChange = (field) => (date) => {
    this.setState({
      currentEvent: { ...this.state.currentEvent, [field]: date },
    });
  };

  handleDriverFilter = (e) => {
    const value = e.target.value;
    this.setState({ filteredDriverId: value, driverId: value });
  };

  handleDelete = () => {
    const { events, currentEvent, isEdit, isModalOpen } = this.state;

    const clondedEvents = clone(events);

    if (isEdit) {
      remove(clondedEvents, {
        id: currentEvent.id,
      });
    }

    this.setState({
      isModalOpen: !isModalOpen,
      currentEvent: null,
      events: clondedEvents,
    });
  };

  handleSubmit = () => {
    const { events, currentEvent, isEdit, isModalOpen } = this.state;
    const { driverId, description, location, task, start, end } = currentEvent;

    if (!(driverId && task && description && location && start && end)) {
      return this.setState({ hasError: true });
    }

    const clondedEvents = clone(events);

    if (isEdit) {
      remove(clondedEvents, {
        id: currentEvent.id,
      });
    }

    const updatedEvents = [
      ...clondedEvents,
      {
        id: nextId(),
        ...currentEvent,
        title: `${driverId} - ${task} - ${description} @ ${location}`,
      },
    ];

    const { overlap, ranges } = hasOverlap(
      filter(updatedEvents, { driverId: currentEvent.driverId })
    );

    if (overlap) {
      const overlapRanges = flatMap(ranges, ({ previous, current }) => [
        previous,
        current,
      ]);

      return this.setState({
        isAlertDialogOpen: true,
        overlapRanges,
      });
    }

    this.setState({
      isModalOpen: !isModalOpen,
      currentEvent: null,
      events: updatedEvents,
    });
  };

  handleOverwrite = () => {
    const { overlapRanges, events, currentEvent } = this.state;
    const { driverId, task, description, location } = currentEvent;
    const clondedEvents = clone(events);
    each(overlapRanges, ({ id }) => {
      remove(clondedEvents, {
        id,
      });
    });

    const updatedEvents = [
      ...clondedEvents,
      {
        id: nextId(),
        ...currentEvent,
        title: `${driverId} - ${task} - ${description} @ ${location}`,
      },
    ];

    this.setState({
      isAlertDialogOpen: !this.state.isAlertDialogOpen,
      isModalOpen: !this.state.isModalOpen,
      events: updatedEvents,
    });
  };

  render() {
    const {
      isModalOpen,
      events,
      isEdit,
      filteredDriverId,
      currentEvent,
      isAlertDialogOpen,
      hasError,
    } = this.state;

    let filteredEvents = events;
    if (filteredDriverId) {
      filteredEvents = filter(events, { driverId: filteredDriverId });
    }

    const drivers = [
      { value: "Driver 1", display: "Driver 1" },
      { value: "Driver 2", display: "Driver 2" },
      { value: "Driver 3", display: "Driver 3" },
    ];
    const driverFilter = [{ value: "", display: "All Drivers" }, ...drivers];

    const headers = [
      { label: "Driver", key: "driverId" },
      { label: "Task", key: "task" },
      { label: "Description", key: "description" },
      { label: "Location", key: "location" },
    ];

    return (
      <div className="App">
        <AlertDialog
          id="overwrite-dialog"
          open={isAlertDialogOpen}
          title={"Overwrite existing event?"}
          content={"Overwrite existing event?"}
          handleClose={this.closeAlertDialog}
          handleOK={this.handleOverwrite}
        />
        <AlertDialog
          id="error-dialog"
          open={hasError}
          title={"Missing required fields"}
          content={"Please fill out all the fields"}
          handleClose={this.closeAlertDialog}
        />
        <DriverFilter
          drivers={driverFilter}
          handleChange={this.handleDriverFilter}
        />
        <CSVLink
          className="csv-export"
          filename={`task-export-${filteredDriverId || "all"}.csv`}
          data={filteredEvents}
          headers={headers}
        >
          Download Schedule
        </CSVLink>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={filteredEvents}
          selectable={true}
          onSelectSlot={this.toggleModal}
          onSelectEvent={this.toggleModal}
          views={["week"]}
          step={60}
          timeslots={1}
          style={{ height: "100vh" }}
        />
        <StyledModal open={isModalOpen} onClose={this.toggleModal}>
          <StyledForm
            drivers={drivers}
            filteredDriverId={filteredDriverId}
            currentEvent={currentEvent}
            isEdit={isEdit}
            handleSubmit={this.handleSubmit}
            handleEventChange={this.handleEventChange}
            handleDateChange={this.handleDateChange}
            handleDelete={this.handleDelete}
          />
        </StyledModal>
      </div>
    );
  }
}

export default Dispatcher;
