var SCRIPT_NAME = 'Staff_Data_Add-on'
var SCRIPT_VERSION = 'v0.22'

// Add-on installation

function onInstall(event) {
  console.log(SCRIPT_VERSION)
  console.log(event)
  StaffData.onInstall(event)
}

// Menu

function onOpen(event) {StaffData.onOpen(event)}

// Menu Options

function staffFolders()              {StaffData.staffFolders()}
function maintainPromotionCalendar() {StaffData.maintainPromotionCalendar()}
function initialize()                {StaffData.initialize()}

// Triggers

function onSDInstallableEdit(event) {StaffData.onEdit(event)}