const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/* YOUR "GLOBAL" STATES HERE! */
			agendas: [],
			currentUser: "",
			contacts: [],
		},
		actions: {
			// Get all users (agenda_slugs).
			loadAgendas: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
				.then(response => response.json())
				.then(users => setStore( { 'agendas': users } ));
			},

			setUser: (user) => {
				setStore( {"currentUser": user} );
			},

			// Load contacts for current user.
			loadContacts: () => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${currentUser}`)
				.then(response => response.jason())
				.then(contactList => setStore( { 'contacts' : contactList } ));
			},
		}
	};
};

export default getState;
