const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			addContact: (name, address, phone, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						address: address,
						phone: phone,
						email: email,
						agenda_slug: "Antuan_agenda"
					})
				}).then(() => {
					fetch("ENDPOINT")
						.then(response => response.json())
						.then(data => {
							setStore({ agenda: data });
						});
				});
			},

			editContact: (name, address, phone, email, id) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						address: address,
						phone: phone,
						email: email,
						agenda_slug: "Antuan_agenda"
					})
				});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
