
function bankTransfer() {
       let bankBalance= document.getElementById("bankBalance").value
            return new Promise(function(resolve, reject) {
                if (bankBalance > 0) {
                    resolve("Transfer Successful");
                } else {
                    reject("Transfer Failed: Balance is 0");
                }
            });
        }

        function startTransfer() {
            let message = document.getElementById("message");

            bankTransfer()
                .then(function(success) {
                    message.innerHTML = success;
                })
                .catch(function(error) {
                    message.innerHTML = error;
                });
        }