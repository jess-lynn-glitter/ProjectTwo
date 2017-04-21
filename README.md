# ProjectTwo


plan of action:

1. figure out how to add a marker in google maps.
	-then: figure out how a lat and lng are derived from that
	-idea: the idea being that I would like to have the user click a spot on the map and have its lat and long immediately figured out, and then they can just give it a name and save it.


4/12: figured out how to get the GPS coordinates from a click-made site.
	----now trying to see how to add it to my mongo db in the proper format.

	---now thinking of using ajax to send a request to my backend where I would set up a route to receive that data and make a new entry in my database.


	google how to jquery ajax to json. 

	need to install jquery on my front end now.


4/19 (yikes...):  

---am not officially approved to do project 2. Have just revamped my file layout to reflect the layout in the passport lesson plan. In doing so I also have to rework quite a few things. Am currently setting up passport right now though. Integrating this though will require me to add a new "collection" to my mongodb for Users. Each user will then have the "spots" collection documents that relate to them "referenced" in their schema...plugging away now...
----
//...Has taken awhile but am not fully synced up with a logged-in homepage as well as my original javascript



4/20: heh heh, ok no but really...

-am currently trying to integrate my schemas for surfspots and users so that each unique user has a unique set of surfspots. **also, just realized that I need to change the redirect for when you signup as a new user it needs to go to /surfspots not '/'**

--Need to figure out how to remove files from remote repository but not on local. accidentally uploaded my node_modules folder.

--Okay, figured out how to send an Ajax request on click to my backend which sends a post request to my backend and saves the info recorded from the click event on the map into the database - NICE./////  
	Now: what comes next is taking this info from a submit button from an information box that will pop up on click on the map, it will need to save this info from the box and send THAT to the database, in order to get spot name and conditions?? (this field may have to change -- to approach later).  Also, this info will have to be added to the current user's spots. So there will be a save going into the database but also into the "Spot" database at large... and then saved from there.

	also, i want "saved" spots to show up for a user immediately. so, on init map I want the map to already have markers appearing based off of the lat and lng of the spots in the database.
	
	I am trying to have all of the surfspots in my database accessible from the front end...which they already are... however, I want to be able to access a specific spot ba




