import React from "react";

import { hydrate } from "react-dom";

import Index from '../../pages/about'

import '../../styles/global/global.css'
import '../../styles/about/about.css'

hydrate(<Index />, document.getElementById("root"));
