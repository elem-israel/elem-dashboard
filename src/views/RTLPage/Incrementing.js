import React, { useEffect, useState } from "react";
import CardFooter from "../../components/Card/CardFooter";
import SearchIcon from "@material-ui/icons/Search";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Update from "@material-ui/icons/Update";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";

export default function Incrementing({ classes }) {
  const [scanned, setScanned] = useState(12155);
  const [inDanger, setInDanger] = useState(425);
  const [medium, setMedium] = useState(1205);

  useEffect(() => {
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
  
    function tickMedium() {
      const rand = Math.random() * 3000;
      setMedium((i) => i + 1);
      setTimeout(tickMedium, rand);
    }
    
    tickScanned();
    tickDanger();
    tickMedium();
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
              <ReportProblemOutlinedIcon />
            </CardIcon>
            <p className={classes.cardCategory}>פרופילים בסיכון גבוה</p>
            <h3 className={classes.cardTitle}>{inDanger}</h3>
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
          <CardHeader color="warning'" stats icon>
            <CardIcon color="warning">
              <ErrorOutlineIcon />
            </CardIcon>
            <p className={classes.cardCategory}>פרופילים בסיכון בינוני</p>
            <h3 className={classes.cardTitle}>
              {new Intl.NumberFormat("en-IN").format(medium)}
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
    </>
  );
}
