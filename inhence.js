function addCompletionLog(nodeId, duration) {
    const node = nodes.find(n => n.id === nodeId);
    node.completionLog.push({
        date: new Date().toISOString(),
        duration: duration,
        notes: document.getElementById('logNotes').value
    });
    node.loggedHours += duration;
    
    if (node.loggedHours >= node.planHours) {
        node.completed = true;
    }
    
    saveTree();
    renderTree();
}
