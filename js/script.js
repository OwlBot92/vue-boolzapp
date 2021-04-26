var app = new Vue({
    el: "#root",
    data: {
        classShowInfo: "hide-class",
        lightDark: "Dark",
        selectedContact: 0,
        messaggio: "",
        searchTxt : "",
        
        //bottone nuovo contatto
        tabNuovoContatto:{
            display: false,
            nome: "",
        },

        //lista contatti in rubrica
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                bg: "active-chat",
                messages: [
                    {   
                        dropD: false,
                        date: '10/01/2020 15:30:55',
                        hour: '15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '10/01/2020 15:50:00',
                        hour: '15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '10/01/2020 16:15:22',
                        hour: '16:15',
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
                        dropD: false,
                        date: '20/03/2020 16:30:00',
                        hour: '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '20/03/2020 16:30:55',
                        hour: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        dropD: false,
                        date: '20/03/2020 16:35:00',
                        hour: '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        doubleCheck: "blue"
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
                        dropD: false,
                        date: '28/03/2020 10:10:40',
                        hour: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        dropD: false,
                        date: '28/03/2020 10:20:10',
                        hour: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '28/03/2020 16:15:22',
                        hour: '16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luca',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        dropD: false,
                        date: '10/01/2020 15:30:55',
                        hour: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '10/01/2020 15:50:00',
                        hour: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: '_5',
                visible: true,
                bg: "",
                messages: [
                    {
                        dropD: false,
                        date: '20/03/2020 16:30:00',
                        hour: '16:30',
                        text: 'Pranzato?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '20/03/2020 16:30:55',
                        hour: '16:30',
                        text: 'No, tu?',
                        status: 'received'
                    },
                    {
                        dropD: false,
                        date: '20/03/2020 16:35:00',
                        hour: '16:30',
                        text: 'No, ci vediamo tra 20 minuti',
                        status: 'sent',
                        doubleCheck: "blue"
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                bg: "",
                messages: [
                    {
                        dropD: false,
                        date: '28/03/2020 10:10:40',
                        hour: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        dropD: false,
                        date: '28/03/2020 10:20:10',
                        hour: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '28/03/2020 16:15:22',
                        hour: '16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        dropD: false,
                        date: '10/01/2020 15:30:55',
                        hour: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        doubleCheck: "blue"
                    },
                    {
                        dropD: false,
                        date: '10/01/2020 15:50:00',
                        hour: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: "",
                avatar: "_0",
                visible: false,
                messages: []
            }
        ]
    },

    //FUNZIONI 
    methods: {
        //mostra la chat corrente
        showChat(indice){
            this.messaggio = "";
            this.setBottomScroll(0);
            this.selectedContact = indice;
            this.contacts.forEach((value, i) => (i != indice) ? value.bg = "" : value.bg = "active-chat");
        },

        //cambia lo stato delle spunte tra singole / doppie / azzurre
        updateChecks(array) {
            let last = array.length-1;
            setTimeout(() => {
                array[last].doubleCheck = "doubleGrey";
            }, 1000);
            setTimeout(() => {
                array[last].doubleCheck = "blue";
            }, 2000);
        },

        // porta la chat dell ultimo messaggio inviato in cima alla lista
        moveInArray(arr, fromIndex, toIndex, ms) {
            setTimeout(() => {
                var element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
            }, ms)
        },

        //funzione che consente di inviare un messaggio e mostrarlo nella chat
        sendMsg(){
            let currentChat = this.contacts[this.selectedContact].messages;
            if (this.messaggio != "" && this.contacts[this.selectedContact].name != "") {
                currentChat.push(
                    {
                        dropD: false,
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"), // da sistemare con la data corrente
                        hour: dayjs().format("HH:mm"),
                        text: this.messaggio,
                        status: "sent",
                        doubleCheck: "oneGrey"
                    }
                )
                this.updateChecks(currentChat);
                this.messaggio = "";
                this.setBottomScroll(100);
                this.moveInArray(this.contacts, this.selectedContact, 0, 0)
                this.replymsg();
                this.selectedContact = 0;
            }
        },

        //funzione di risposta automatica al messaggio inviato
        replymsg(){
            let currentChat = this.contacts[this.selectedContact].messages;
            let current = this.selectedContact;
            setTimeout(() => {
                currentChat.push(
                    {
                        dropD: false,
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        hour: dayjs().format("HH:mm"),
                        text: "ok",
                        status: "received"
                    }
                )
            }, 3000);
            this.setBottomScroll(3000);
        },

        //funzione che permette di cercare un contatto 
        filterChat(){
            for (const obj of this.contacts){
                if (obj.name != "") {
                    let lowerTxt = obj.name.toLowerCase();
                    let lowerInput = this.searchTxt.toLowerCase();
                    (lowerTxt.includes(lowerInput)) ? obj.visible = true : obj.visible = false;
                }
            }
        },

        //per avere un array di messaggi ricevuti ed evitare un errore se dovesse essere vuoto
        //vedi v-if linea 94 HTML
        filterReceivedMessages(indice){
            let mes = this.contacts[indice].messages;
            let arrayReceived = mes.filter(item => item.status == "received");
            return arrayReceived;
        },

        //funzione che prende informazioni riguardo l'ultimo messaggio della chat e...
        findLast(indice){
            let mes = this.contacts[indice].messages;
            let i = mes.length - 1;
            let flag = false;
            let lastMsgObj;
            let slicedText = "";
            while (i >= 0 && flag == false) {
                lastMsgObj = mes[i];
                flag = true;
                i--;
            }
            //se c'è almeno un messaggio ed è troppo lungo ne mostra solo una parte 
            if (mes.length){
                (lastMsgObj.text.length > 20) ? slicedText = `${lastMsgObj.text.slice(0, 17)}...` : slicedText = lastMsgObj.text;
                return [lastMsgObj.hour, slicedText];
            }
            //altrimenti restituisce stringhe vuote
            else{
                return ["", slicedText];
            }
        },   

        //prende l'ultimo messaggio dei messaggi ricevuti nella chat corrispondente
        findLastReceived(indice) {
            let mes = this.contacts[indice].messages;
            let lastMsg = "";
            let arrayReceived = mes.filter(item => item.status == "received");
            lastMsg = arrayReceived[arrayReceived.length - 1]
            return lastMsg;
        },

        //toggle del menu che mostra l'opzione per cancellare un messaggio
        toggleDrop(key){
            let currentChat = this.contacts[this.selectedContact].messages;
            for (const iterator of currentChat) {
                if (iterator != key) {
                    iterator.dropD = false;
                }
            }
            (key.dropD == true) ? key.dropD = false : key.dropD = true;

        },

        //funzione che permette di cancellare un messaggio
        deleteMsg(key){
            let currentChat = this.contacts[this.selectedContact].messages;
            let toDelete = currentChat.indexOf(key)
            currentChat.splice(toDelete, 1);
        },

        //funzione che cambia tra dark e light mode
        toggleDarkMode(){
            let dark = document.getElementById("darkID");
            if (!dark.href.includes("dark")) {
                dark.setAttribute("href", "css/style-dark.css");
                this.lightDark = "Light";
            }
            else{
                dark.setAttribute("href", "")
                this.lightDark = "Dark";
            }
        },
        //funzione che fa lo scroll automatico sul fondo della chat, per mostrare sempre gli ultimi messaggi
        setBottomScroll(ms){
            setTimeout(() => {
                let chatBox = document.getElementById("messages-box");
                chatBox.scrollTop = chatBox.scrollHeight;
            }, ms);
        },

        //display del field di aggiunta contatto
        displayAddContact(){
            (this.tabNuovoContatto.display == false) ? this.tabNuovoContatto.display = true : this.tabNuovoContatto.display = false;        
        },

        //funzione che permette di aggiungere un nuovo contatto all'elenco
        addContact(){
            if (this.tabNuovoContatto.nome != "") {

                this.contacts.splice(this.contacts.length-1,0,
                    {
                        name: this.tabNuovoContatto.nome,
                        avatar: "_0",
                        visible: true,
                        bg: "",
                        messages: []
                    }
                );
                this.tabNuovoContatto.nome = "";
                this.tabNuovoContatto.display = false;
            }
        },

        //funzione che permette di eliminare un contatto dall'elenco
        deleteContact(indice){
            if (this.contacts[indice].name != "") {
                this.contacts.splice(indice, 1);
                this.selectedContact = 0;            
            }
        },

        showInfoContact(){
            (this.classShowInfo == "hide-class") ? this.classShowInfo = "show-class" : this.classShowInfo = "hide-class"; 
        },
        closeInfoContact(){
            this.classShowInfo = "hide-class";
        },
        openInfoContact(){
            this.classShowInfo = "show-class";
        }
    }
});

