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

export default function Highlight({ classes }) {
  return (
    <>
      <GridItem xs={12} sm={6} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>תכנים חשודים</h4>
            <p className={classes.cardCategoryWhite}>מאותר ע"י מערכת ה-NLP</p>
          </CardHeader>
          <CardBody>
            <SnackbarContent
              message={
                <Quote
                  text={
                    <React.Fragment>
                      <mark>אח שלי הטריד אותי מינית מכיתה ה' עד ח'.</mark>{" "}
                      בהתחלה זה היה חיכוכים קלים, אבל אז זה התחיל להיות יותר
                      קיצוני. ניסיתי לספר לאמא כמה פעמים אבל היא הדחיקה. השנה
                      החלטתי שנמאס לי, עשיתי איתה שיחה אמיתית והסברתי לה את
                      המצב, היא ענתה לי שהיא לא יודעת למי להאמין. בזמן{" "}
                      <mark>ש אני מתפרקת מולה</mark> היא אפילו לא חיבקה אותי.
                    </React.Fragment>
                  }
                  author={
                    <React.Fragment>
                      bubbleGum32{" "}
                      <a href={"#"}>(לחץ כדי לראות פוסט מקורי)</a>
                    </React.Fragment>
                  }
                />
              }
              close
              rtlActive
              color="info"
            />
            <SnackbarContent
              message={
                <Quote
                  text={
                    <React.Fragment>
                      <mark>אני עברתי אונס שהייתי קטן</mark>
                      ביחד עם אחי <mark>ממישהו במשפחה</mark>
                      ואף אחד לא יודע על כך. הראש שלי אומר לי שזה לא לגמרי לא ב
                      <mark>אשמתי</mark>, מה אני אומר למח כדי להוציא את המחשבה
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
              color="info"
            />
          </CardBody>
        </Card>
      </GridItem>
    </>
  );
}
