/*eslint-disable*/
import React, {useEffect, useState} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import {completedTasksChart, dailySalesChart} from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import Avatars from "./Avatars";
import Highlight from "./Highlight";
import SearchIcon from '@material-ui/icons/Search';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles(styles);

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
              <SearchIcon />
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
              <ErrorOutlineIcon/>
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
