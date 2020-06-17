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

export default function Avatars({ classes }) {
  return (
    <CardBody>
      <div style={{ display: "flex" }}>
        <IconButton aria-label="delete">
          <ChevronRightIcon />
        </IconButton>
        {[a1, a2, a3, a4, a5, a6].map((img) => (
          <Avatar alt="Remy Sharp" src={img} className={classes.largeAvatar} />
        ))}
      </div>
    </CardBody>
  );
}
