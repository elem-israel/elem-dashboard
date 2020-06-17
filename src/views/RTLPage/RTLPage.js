/*eslint-disable*/
import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Avatar from "@material-ui/core/Avatar";

import a3 from "../../assets/img/avatars/3.jpg";

import { completedTasksChart, dailySalesChart } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import Avatars from "./Avatars";
import Highlight from "./Highlight";

let bugs = [
  "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟",
  "	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟",
  "همان حال کار آنها به نوعی وابسته به متن می‌باشد",
  "	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند",
];
let website = [
  "بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟",
];
let server = [
  "گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟",
  "از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟",
  "از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟",
];

const useStyles = makeStyles(styles);

const BlinkingComponent = ({ highlighting }) => (
  <div
    style={{
      transition: "all 0.5s ease-in",
      color: highlighting ? "white" : "black",
    }}
  >
    Watch Me
  </div>
);

function Incrementing({ classes }) {
  const [scanned, setScanned] = useState(12155);
  const [inDanger, setInDanger] = useState(425);

  function tickScanned() {
    const rand = Math.random() + 200;
    setScanned((scanned) => scanned + 1);
    setTimeout(tickScanned, rand);
  }

  function tickDanger() {
    const rand = Math.random() * 3000;
    setInDanger((i) => i + 1);
    setTimeout(tickDanger, rand);
  }

  useEffect(() => {
    tickScanned();
    tickDanger();
  }, []);

  return (
    <>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <Accessibility />
            </CardIcon>
            <p className={classes.cardCategory}>פרופילים נסרקו</p>
            <h3 className={classes.cardTitle}>
              {new Intl.NumberFormat("en-IN").format(scanned)}
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              מתעדכן בזמן אמת
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
              <Icon>info_outline</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>פרופילים בסיכון גבוה</p>
            <h3 className={classes.cardTitle}>{inDanger}</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <LocalOffer />
              פרטים נוספים
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
}

export default function RTLPage() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <Incrementing classes={classes} />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>פרופילים חדשים שאותרו</h4>
              <p className={classes.cardCategoryWhite}>
                ע"י מערכת ML ב24 שעות האחרונות
              </p>
            </CardHeader>
            <Avatars classes={classes} />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>פרופילים לפי סיכון</h4>
              <p className={classes.cardCategoryWhite}>
                מצאת טעות? <a href={"#"}>דווח למנהל המערכת</a>.
              </p>
            </CardHeader>
            <CardBody>
              <SnackbarContent
                message={
                  <>
                    אותרו 47 פרופילים עם סיכון <b>גבוה</b>{" "}
                    <Button color={"primary"}>Go to profiles</Button>
                  </>
                }
                close
                rtlActive
                color="danger"
              />
              <SnackbarContent
                message={
                  <>
                    אותרו 13 פרופילים עם סיכון <b>בינוני</b>{" "}
                    <Button color={"primary"}>Go to profiles</Button>
                  </>
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  <>
                    אותרו 13 פרופילים עם סיכון <b>נמוך</b>{" "}
                    <Button color={"primary"}>Go to profiles</Button>
                  </>
                }
                close
                rtlActive
                color="success"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <Highlight classes={classes} />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>עוד גרף</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                עלייה דרמטית
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> שמציג נתונים מעניינים
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}> סריקת פקופילים - אינסטגראם</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> עודכן לאחרונה: לפני 5 דקות
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
