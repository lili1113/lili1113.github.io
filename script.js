// 添加上下文菜单
function showContextMenu(e, node) {
    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    menu.innerHTML = `
        <ul>
            <li onclick="createNode(${node.id}, {x: ${e.clientX+50}, y: ${e.clientY+50}})">添加子节点</li>
            <li onclick="deleteNode(${node.id})">删除节点</li>
        </ul>
    `;
    document.body.appendChild(menu);
    
    setTimeout(() => menu.remove(), 2000);
}
