Vue.createApp({
    data() {
        return {
            teachers: [
                { id: 1, name: "Anders", salary: 1234, address: "Roskilde" },
                { id: 2, name: "Peter", salary: 2222, address: "Roskilde" },
                { id: 3, name: "Morten", salary: 1244, address: "Ringsted" }
            ],
            selected: null,
            anotherName: null
        }
    },
    methods: {

        clicked(id) {
            console.log("clicked id: " + id)
            element = this.data.find(element => element.id == id)
            if (element == null) {
                this.selected = null
            } else {
                // https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
                this.selected = Object.assign({}, element)
            }
        },
        update(id) {
            console.log("update id, name " + id + " " + this.selected.name)
            // https://linuxhint.com/update-object-in-javascript/
            index = this.data.findIndex(element => element.id == id)
            this.data[index].name = this.selected.name
        }
    }
}).mount("#app")