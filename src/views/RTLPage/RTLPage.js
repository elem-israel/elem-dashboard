/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { completedTasksChart, dailySalesChart } from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import Avatars from "./Avatars";
import Highlight from "./Highlight";
import { Typography } from "@material-ui/core";
import Incrementing from "./Incrementing";

const useStyles = makeStyles(styles);

export default function RTLPage() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <Incrementing classes={classes} />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>פרופילים חדשים שאותרו</h4>
              <p className={classes.cardCategoryWhite}>
                ע"י מערכת ML ב24 שעות האחרונות
              </p>
            </CardHeader>
            <Avatars
              classes={classes}
              title={
                <Typography variant="h5" color={"error"}>
                  בסיכון גבוה
                </Typography>
              }
            />
            <Avatars
              classes={classes}
              title={
                <Typography variant="h5" style={{ color: "orange" }}>
                  בסיכון בינוני
                </Typography>
              }
            />
            <Avatars
              classes={classes}
              title={
                <Typography variant="h5" style={{ color: "#228B22" }}>
                  בסיכון נמוך
                </Typography>
              }
            />
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
