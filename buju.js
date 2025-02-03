// 手动调整节点位置（需添加拖拽功能）
function enableDrag() {
    let isDragging = false;
    let currentDragNode = null;

    document.addEventListener('mousedown', (e) => {
        const nodeEl = e.target.closest('.skill-node');
        if (nodeEl) {
            isDragging = true;
            currentDragNode = nodes.find(n => n.id === parseInt(nodeEl.dataset.id));
            document.body.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging && currentDragNode) {
            currentDragNode.position.x = e.clientX - 60;
            currentDragNode.position.y = e.clientY - 30;
            renderTree();
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        currentDragNode = null;
        document.body.style.cursor = 'default';
        saveTree();
    });
}
// 初始化时调用
enableDrag();
