function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.pading = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // });
}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = ` <h4 class="player-name">New-player</h4>
    <p>Laboriosam nostrum, cum doloribus reiciendis dolores modi laborum quae! Atque possimus laborum quod
        magni consequatur nulla omnis dolores quisquam delectus vero error aliquid quo laboriosam ea, et
        amet expedita tempore.</p>
`;
    playersContainer.appendChild(player);
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // });
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
});