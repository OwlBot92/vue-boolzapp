var app = new Vue({
    el: "#root",
    data: {
        selectedContact: 0,
        messaggio: "",
        searchTxt : "",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                bg: "active-chat",
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                bg: "",
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                bg: "",
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },

    methods: {
        showChat(indice){
            this.selectedContact = indice;
            this.contacts.forEach((value, i) => (i != indice) ? value.bg = "" : value.bg = "active-chat");
        },

        sendMsg(){
            let currentChat = this.contacts[this.selectedContact].messages;
            currentChat.push(
                {
                    date: "00/00/00", // da sistemare con la data corrente
                    text: this.messaggio,
                    status: "sent"
                }
            )
            this.messaggio = "";
            setTimeout(() => { 
                currentChat.push(
                    {
                        date: "00/00/00",
                        text: "ok",
                        status: "received"
                    }
                )
            }, 1500);
        },

        filterChat(){
            for (const obj of this.contacts){
                let lowerTxt = obj.name.toLowerCase();
                let lowerInput = this.searchTxt.toLowerCase();
                (lowerTxt.includes(lowerInput)) ? obj.visible = true : obj.visible = false;
            }
        }
    }
});