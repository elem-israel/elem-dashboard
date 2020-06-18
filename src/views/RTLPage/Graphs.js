import React, { useEffect, useState } from "react";
import CardFooter from "../../components/Card/CardFooter";
import SearchIcon from "@material-ui/icons/Search";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Update from "@material-ui/icons/Update";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import LocalOffer from "@material-ui/icons/LocalOffer";
import GridContainer from "../../components/Grid/GridContainer";
import ChartistGraph from "react-chartist";
import { completedTasksChart, dailySalesChart } from "../../variables/charts";
import CardBody from "../../components/Card/CardBody";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

export default function Graphs({ classes }) {
  return (
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
  );
}
