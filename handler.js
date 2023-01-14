let isLeftDragging = false;
let isRightDragging = false;

function ResetColumnSizes() {
	// when codeArea resizes return to default col sizes
	let codeArea = document.querySelector(".codeArea");
	codeArea.style.gridTemplateColumns = "1fr 9px 1fr 9px 1fr";
}
ResetColumnSizes();

function SetCursor(cursor) {
	let codeArea = document.querySelector(".codeArea");
	codeArea.style.cursor = cursor;
}

function StartLeftDrag() {
	console.log("mouse down");
	isLeftDragging = true;
	
	SetCursor("ew-resize");
}

function StartRightDrag() {
	console.log("mouse down");
	isRightDragging = true;
	
	SetCursor("ew-resize");
}

function EndDrag() {
	console.log("mouse up");
	isLeftDragging = false;
	isRightDragging = false;
	
	SetCursor("auto");
}

function StopDrag(){
	// console.log("mouse up");
	// isLeftDragging = false;
	// isRightDragging = false;
	
	// SetCursor("auto");

}

function OnDrag(event) {
	if(isLeftDragging || isRightDragging) {
		console.log("Dragging");
		//console.log(event);
		
		let codeArea = document.querySelector(".codeArea");
		let leftcol = document.getElementById("leftcol");
		let rightcol = document.getElementById("rightcol");	
		
		let leftColWidth = isLeftDragging ? event.clientX : leftcol.clientWidth;
		let rightColWidth = isRightDragging ? codeArea.clientWidth - event.clientX : rightcol.clientWidth;
		
		let dragbarWidth = 9;
		
		let cols = [
			leftColWidth,
			dragbarWidth,
			codeArea.clientWidth - (2*dragbarWidth) - leftColWidth - rightColWidth,
			dragbarWidth,
			rightColWidth
		];
		
		let newColDefn = cols.map(c => c.toString() + "px").join(" ");
			
		console.log(newColDefn);
		codeArea.style.gridTemplateColumns = newColDefn;
		
		event.preventDefault();
	}
}