import axios from 'axios'
import { baseURL } from '../config/api'

const client = axios.create({
  baseURL,
  timeout: 2000,
  headers: {
    'X-API-KEY': '0293b928-9e8e-4fb5-abb0-77dbb6036ba6',
    'Content-Type': 'application/json',
  },
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }
