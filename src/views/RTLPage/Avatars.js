import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import a1 from "../../assets/img/avatars/1.jpg";
import a2 from "../../assets/img/avatars/2.jpg";
import a3 from "../../assets/img/avatars/3.jpg";
import a4 from "../../assets/img/avatars/4.jpg";
import a5 from "../../assets/img/avatars/5.jpg";
import a6 from "../../assets/img/avatars/6.jpg";
import CardBody from "../../components/Card/CardBody";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
    root: {
        direction: "rtl",
    },
    boldText: {
        color: "red",
    },
};

const useStyles = makeStyles(styles);

export default function Avatars({ classes }) {
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
            <div style={{ display: "flex" }}>
                <IconButton aria-label="delete">
                    <ChevronRightIcon />
                </IconButton>
                {[a1, a2, a3, a4, a5, a6].map((img) => (
                    // eslint-disable-next-line react/jsx-key
                    <div onClick={handleOpen}>
                        <Avatar
                            alt="Remy Sharp"
                            src={img}
                            className={classes.largeAvatar}
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
                    <DialogTitle id="alert-dialog-title">שם מלא: מאי סער</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div style={{ lineHeight: 2.5 }}>אשת קשר בעמותת עלם: עדי כהן</div>
                            <div>
                                תכנים חשודים: בגיל 13 האבא של האחים שלי הטריד אותי מינית, בלילה
                                שכולם ישנו הוא היה נוגע בי ומעביר את איבר המין שלו על גופי, זה
                                נמשך שנה. סיפרתי לאמא שלי בחצי שנה והיא לא האמינה עד שאחותי אמרה
                                לה שהוא הטריד גם אותה.
                            </div>
                            <div style={{ lineHeight: 2.5 }}>עוקב אחרי: broken_tears273 ,kolhahazuimalay</div>
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
                            מחק
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            אשר
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </CardBody>
    );
}
