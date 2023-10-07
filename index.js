Vue.createApp({
    data() {
        return {
            teachers: [
                { id: 1, name: "Anders", salary: 1234, address: "Roskilde" },
                { id: 2, name: "Peter", salary: 2222, address: "Roskilde" },
                { id: 3, name: "Morten", salary: 1244, address: "Ringsted" },
                { id: 4, name: "Vibeke", salary: 4562, address: "Valby" }
            ],
            selected: null
        }
    },
    methods: {
        clicked(id) {
            console.log("clicked id: " + id)
            element = this.teachers.find(element => element.id == id)
            if (element == null) {
                this.selected = null
            } else {
                // https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
                this.selected = Object.assign({}, element)
            }
        },
        update() {
            //console.log("update id, name " + id + " " + this.selected.name)
            // https://linuxhint.com/update-object-in-javascript/
            index = this.teachers.findIndex(element => element.id == this.selected.id)
            this.teachers[index].name = this.selected.name
        }
    }
}).mount("#app")