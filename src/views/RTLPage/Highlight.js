import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import a1 from "../../assets/img/avatars/1.jpg";
import a2 from "../../assets/img/avatars/2.jpg";
import a3 from "../../assets/img/avatars/3.jpg";
import a4 from "../../assets/img/avatars/4.jpg";
import a5 from "../../assets/img/avatars/5.jpg";
import a6 from "../../assets/img/avatars/5.jpg";
import CardBody from "../../components/Card/CardBody";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useEffect, useState } from "react";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import Accessibility from "@material-ui/icons/Accessibility";
import CardFooter from "../../components/Card/CardFooter";
import Update from "@material-ui/icons/Update";
import Icon from "@material-ui/core/Icon";
import LocalOffer from "@material-ui/icons/LocalOffer";
import SnackbarContent from "../../components/Snackbar/SnackbarContent";
import Button from "../../components/CustomButtons/Button";
import Typography from "@material-ui/core/Typography";
import Quote from "../../components/Typography/Quote";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  marked: { color: "#ff7d99", backgroundColor: "unset" },
});

function Mark({ children }) {
  const classes = useStyles();
  return <mark className={classes.marked}>{children}</mark>;
}

export default function Highlight({ classes }) {
  return (
    <>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>פוסטים שאותרו</h4>
            <p className={classes.cardCategoryWhite}>מאותר ע"י מערכת ה-NLP</p>
          </CardHeader>
          <CardBody>
            <SnackbarContent
              message={
                <Quote
                  text={
                    <React.Fragment>
                      אח שלי <Mark>הטריד</Mark> אותי <Mark>מינית</Mark> מכיתה ה'
                      עד ח'. בהתחלה זה היה חיכוכים קלים, אבל אז זה התחיל להיות
                      יותר קיצוני. ניסיתי לספר לאמא כמה פעמים אבל היא הדחיקה.
                      השנה החלטתי שנמאס לי, עשיתי איתה שיחה אמיתית והסברתי לה את
                      המצב, היא ענתה לי שהיא לא יודעת למי להאמין. בזמן{" "}
                      שאני <Mark>מתפרקת</Mark> מולה היא אפילו לא חיבקה אותי.
                    </React.Fragment>
                  }
                  author={
                    <React.Fragment>
                      bubbleGum32 <a href={"#"}>(לחץ כדי לראות פוסט מקורי)</a>
                    </React.Fragment>
                  }
                />
              }
              close
              rtlActive
            />
            <SnackbarContent
              message={
                <Quote
                  text={
                    <React.Fragment>
                      אני עברתי <Mark>אונס</Mark>  שהייתי קטן
                      ביחד עם אחי ממישהו <Mark>במשפחה</Mark>
                      {" "}ואף אחד לא יודע על כך. הראש שלי אומר לי שזה לא לגמרי לא{" "}
                      <Mark>באשמתי</Mark> , מה אני אומר למח כדי להוציא את המחשבה
                      הזאת??
                    </React.Fragment>
                  }
                  author={
                    <React.Fragment>
                      anonymous26775{" "}
                      <a href={"#"}>(לחץ כדי לראות פוסט מקורי)</a>
                    </React.Fragment>
                  }
                />
              }
              close
              rtlActive
            />
          </CardBody>
        </Card>
      </GridItem>
    </>
  );
}
