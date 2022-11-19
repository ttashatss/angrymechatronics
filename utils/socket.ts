import io from "socket.io-client"
import React from "react"
import { useEffect, useState } from "react"
import moment from 'moment'

const socket = io("http://localhost:8000")

export default socket;