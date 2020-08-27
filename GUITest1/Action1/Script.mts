'Driver Script
'==============
On Error Resume Next
Call LaunchApplication()
If Browser("BlazeDemo").Page("BlazeDemo").WebList("Depareture").Exist(2) Then
   Call SearchFlight()
End If
If Browser("BlazeDemo").Page("FlightSelection").WebButton("FlightSelect").Exist(2) Then
   Call SelectFlight() 
End If
If Browser("BlazeDemo").Page("FlightPurchase").WebElement("FlightPurchase_Header").Exist(2) Then
   Call EnterCustomerDetails()
End If
If Browser("BlazeDemo").Page("FlightConfirmation").WebElement("FlightConfirmationHeader").Exist(2) Then
   Call CaptureTravelDetails()
End If
Print Environment.value("ConfirmationID")
Call CloseApplication()












