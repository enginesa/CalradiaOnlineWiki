import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            topRoadItems: [
                {
                    text: 'Ana Sayfa',
                    to: {name: "Ana Sayfa"}

                },
                {
                    text: 'Wiki',
                    to: {name: "Wiki"}
                }

            ],
            urlKey: '',
        }
    },
    computed: {
        ...mapGetters([
            'getSpyContent',
        ]),

    },
    methods: {
        routeGetKey() {
            this.urlKey = this.$route.params.key;
            this.selectedComponent = this.urlKey ? this.urlKey : "Default";
        },
        getOneKeySpyContent() {
            //url parama göre bilgiyi getirir
            var content = this.getSpyContent;

            var par = "";

            if (this.urlKey) {
                for (var i = 0; i < content.length; i++) {

                    var mainContent = content[i]["mainContent"] ? content[i]["mainContent"] : "";

                    if (mainContent) {
                        for (var j = 0; j < mainContent.length; j++) {

                            if (this.urlKey === mainContent[j]["key"]) {
                                par = mainContent[j];
                                break;
                            }

                        }
                    }
                }
            }

            return par;
        },
        breadCrumbChange() {
            if (this.urlKey && this.topRoadItems.length === 3) this.topRoadItems.pop();

            if (this.urlKey && this.topRoadItems.length === 2) {
                var urlInfo = this.getOneKeySpyContent();

                this.topRoadItems.push({
                    text: urlInfo.name,
                    active: false
                })
            } else if (!this.urlKey && this.topRoadItems.length === 3) {
                this.topRoadItems.pop();
            }

        },
    },
    created(){
        this.routeGetKey();
        this.breadCrumbChange();
    },
    watch: {
        '$route.params.key': function () {
            this.routeGetKey();
            this.breadCrumbChange();
        },
    }
}