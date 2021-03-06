/* global Viz */
const viz_lib = require('viz.js');
const options = require('../options');
const ast2dot = require('./dot');

const viz = typeof viz_lib === 'function' ? viz_lib : Viz;

module.exports = (pAST, pOptions) => viz(
    ast2dot(pAST, pOptions),
    {engine: options.getOptionValue(pOptions, "engine")}
);

/*
 This file is part of state-machine-cat.

 smcat is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 smcat is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with smcat.  If not, see <http://www.gnu.org/licenses/>.
 */
