import * as React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CardBody from "../../components/Card/CardBody";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";

const styles = {
  root: {
    direction: "rtl",
  },
  boldText: {
    color: "red",
  },
};

const pics = [
  28,
  11,
  29,
  21,
  12,
  22,
  13,
  24,
  8,
  14,
  25,
  15,
  26,
  16,
  17,
  18,
  19,
  20,
  10,
  27,
  30,
];

const useStyles = makeStyles(styles);

export default function Avatars({ classes, title, more, start = 0, end = 6 }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [status, setStatus] = useState("c");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const dialogClasses = useStyles();
  return (
    <CardBody>
      {title && (
        <Paper elevation={3} style={{ padding: 2, marginBottom: 12 }}>
          {title}
        </Paper>
      )}
      <div style={{ display: "flex" }}>
        {more && (
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        )}
        {pics.slice(start, end).map((img) => (
          // eslint-disable-next-line react/jsx-key
          <div onClick={handleOpen}>
            <Avatar
              alt="Remy Sharp"
              src={`/avatars/${img}.jpg`}
              className={`${classes.largeAvatar} gradient`}
            />
          </div>
        ))}

        <Dialog
          open={isDialogOpen}
          onClose={handleClose}
          onExit={handleClose}
          style={{ direction: "rtl" }}
          BackdropProps={{
            classes: {
              root: dialogClasses.root,
            },
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">כרטיס אישי</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div style={{ lineHeight: 2.5 }}>שם מלא: מאי סער</div>
              <div style={{ lineHeight: 2.5 }}>
                אחראי טיפול: עדי כהן
              </div>
              <div style={{ lineHeight: 2.5 }}>סיבת האיתור: תוכן, עוקב אחרי, אחר
              </div>
              <div>
                תוכן מאותר: בגיל 13{" "}
                <span className={dialogClasses.boldText}> האבא </span>
                של <span className={dialogClasses.boldText}> האחים </span>
                שלי <span className={dialogClasses.boldText}> הטריד </span>אותי
                <span className={dialogClasses.boldText}> מינית</span>, זה נמשך
                שנה. סיפרתי לאמא שלי בחצי שנה והיא לא האמינה עד שאחותי אמרה לה
                שהוא <span className={dialogClasses.boldText}> הטריד </span> גם
                אותה.
              </div>
              <div style={{ lineHeight: 2.5 }}>
                עוקב אחרי: broken_tears273 ,kolhahazuimalay
              </div>
              סטטוס פרופיל:
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                onChange={handleChange}
              >
                <MenuItem value={"a"}>הפרופיל אותר</MenuItem>
                <MenuItem value={"b"}>נעשה ניסיון ליצירת קשר</MenuItem>
                <MenuItem value={"c"}>נוצר קשר ראשוני</MenuItem>
                <MenuItem value={"d"}>קשר קבוע עם מתנדב</MenuItem>
                <MenuItem value={"e"}> נמצא בטיפול</MenuItem>
                <MenuItem value={"f"}>סיום טיפול</MenuItem>
              </Select>
              <div style={{ lineHeight: 2.5 }}>צרף קבצים</div>
              <div style={{ lineHeight: 2.5 }}>היסטוריית צאט</div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setIsDialogOpen(false);
              }}
              color="primary"
            >
              סגור
            </Button>
            <Button onClick={handleClose} color="primary">
              שמור
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </CardBody>
  );
}
