var SCRIPT_NAME = 'Staff_Data_Add-on'
var SCRIPT_VERSION = 'v0.15'

// Add-on installation

function onInstall(event) {
  StaffData.clearConfig()
  onOpen(event)
} 

// Menu

/**
 * onOpen from install: authMode === FULL, initialized === false
 * simple onOpen: authMode === LIMITED, initialized === false OR true
 * onOpen with Add-on not enabled: ???
 */

function onOpen(event) {

  console.log(SCRIPT_VERSION)
  console.log(event)

  var menu = SpreadsheetApp.getUi().createAddonMenu()
  
  if (event.authMode === ScriptApp.AuthMode.NONE || !StaffData.initialized(event)) {

    menu.addItem('Start', 'initialize')
    
  } else { 

    menu
      .addItem("Update Staff Folders in Google Drive", "staffFolders")
      .addItem("Update Event Sponsorship Pages for Teams", "maintainPromotionCalendar")   
  }
          
  menu.addToUi();
}

// Menu Options

function staffFolders()              {StaffData.staffFolders()}
function maintainPromotionCalendar() {StaffData.maintainPromotionCalendar()}
function initialize()                {StaffData.initialize()}

// Triggers

function onInstallableEdit(event)    {StaffData.onEdit(event)}