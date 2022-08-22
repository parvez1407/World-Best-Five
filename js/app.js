let playerArray = [];

const playerListBody = document.getElementById('player-list');
function displayPlayer(nameList) {
    playerListBody.innerText = '';

    for (let i = 0; i < nameList.length; i++) {
        const name = playerArray[i].playerName;

        const ol = document.createElement('ol');
        ol.innerHTML = `
            <li class='mt-5'><span>${i + 1}.</span> ${name}</li>

            `;
        playerListBody.appendChild(ol);
    }
}


function addToPlayerList(element) {
    // console.log(element.parentNode.parentNode.children[1].innerText);
    const playerName = element.parentNode.parentNode.children[1].innerText;

    const playerObject = {
        playerName: playerName
    }

    if (playerArray.length < 5) {
        playerArray.push(playerObject);
        displayPlayer(playerArray);
    }
    else {
        alert('Five Item Selected You can not select more');
        return;
    }

    element.disabled = true;
    element.style.backgroundColor = '#808080';

}





