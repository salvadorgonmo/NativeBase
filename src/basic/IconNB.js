import React, { Component } from "react";
import PropTypes from "prop-types";

import { connectStyle } from "native-base-shoutem-theme";

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class IconNB extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  setIcon(iconType) {
    if (iconType == undefined && this.context.theme) {
      iconType = this.context.theme["@@shoutem.theme/themeStyle"].variables
        .iconFamily;
    }
    switch (iconType) {
    case "Ionicons":
      this.Icon = Ionicons;
      break;
    case "Entypo":
      this.Icon = Entypo;
      break;
    case "Feather":
      this.Icon = Feather;
      break;
    case "FontAwesome":
      this.Icon = FontAwesome;
      break;
    case "Foundation":
      this.Icon = Foundation;
      break;
    case "MaterialIcons":
      this.Icon = MaterialIcons;
      break;
    case "MaterialCommunityIcons":
      this.Icon = MaterialCommunityIcons;
      break;
    case "Octicons":
      this.Icon = Octicons;
      break;
    case "Zocial":
      this.Icon = Zocial;
      break;
    case "SimpleLineIcons":
      this.Icon = SimpleLineIcons;
      break;
    default:
      this.Icon = Ionicons;
    }
  }

  componentWillMount() {
    this.setIcon(this.props.type);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.type && this.props.type != nextProps.type) {
      this.setIcon(nextProps.type);
    }
  }

  render() {
    return <this.Icon ref={c => (this._root = c)} {...this.props} />;
  }
}

IconNB.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  type: PropTypes.oneOf([
    "Ionicons",
    "Entypo",
    "FontAwesome",
    "Foundation",
    "MaterialIcons",
    "MaterialCommunityIcons",
    "Octicons",
    "Zocial",
    "SimpleLineIcons"
  ])
};

const StyledIconNB = connectStyle(
  "NativeBase.IconNB",
  {},
  mapPropsToStyleNames
)(IconNB);

export { StyledIconNB as IconNB };
