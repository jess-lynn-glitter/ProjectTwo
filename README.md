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