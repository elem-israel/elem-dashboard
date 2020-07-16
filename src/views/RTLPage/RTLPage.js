/*eslint-disable*/
import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import Avatars from "./Avatars";
import Highlight from "./Highlight";
import { Typography } from "@material-ui/core";
import Incrementing from "./Incrementing";
import Graphs from "./Graphs";

const useStyles = makeStyles(styles);

export default function RTLPage() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <Incrementing classes={classes} />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>פרופילים חדשים שאותרו</h4>
              <p className={classes.cardCategoryWhite}>
                ע"י מערכת ML ב24 שעות האחרונות
              </p>
            </CardHeader>
            <Avatars
              more
              start={0}
              end={8}
              classes={classes}
              title={
                <Typography variant="h5" color={"error"}>
                  בסיכון גבוה
                </Typography>
              }
            />
            <Avatars
              more
              start={8}
              end={16}
              classes={classes}
              title={
                <Typography variant="h5" style={{ color: "orange" }}>
                  בסיכון בינוני
                </Typography>
              }
            />
            <Avatars
              more
              start={16}
              end={24}
              classes={classes}
              title={
                <Typography variant="h5" style={{ color: "#228B22" }}>
                  בסיכון נמוך
                </Typography>
              }
            />
          </Card>
        </GridItem>
        <GridItem xs={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>פרופילים בטיפול</h4>
            </CardHeader>
            <Avatars start={12} end={18} classes={classes} />
            <Avatars more start={4} end={10} classes={classes} />
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <Highlight classes={classes} />
      </GridContainer>
      <Graphs classes={classes} />
    </div>
  );
}
