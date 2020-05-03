import React from "react";

import { hydrate } from "react-dom";

import Index from '../../pages/index/index'

import '../../styles/global/global.css'
import '../../styles/index/index.css'

hydrate(<Index />, document.getElementById("root"));
