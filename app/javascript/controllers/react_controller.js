import { Controller } from "@hotwired/stimulus"
import React from "react";
import {createRoot} from 'react-dom/client'
import App from '../App'
import { AuthProvider } from "../common/auth";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("react connected.")
    const app = document.getElementById('app');
    createRoot(app).render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>)
  }
}
