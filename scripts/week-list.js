'use strict'

const workspace = document.querySelector('.workspace');
const lastRowButton = document.getElementById('last-row-button');
let titleContent = new Map();
let memoContent = new Map();

function editRow(rowId){
	let title = document.querySelector(`#title--${rowId}`);
	let memo = document.querySelector(`#memo--${rowId}`);
	if (title.getAttribute("readonly")){
		title.removeAttribute('readonly');
		title.classList.toggle("changable")
		titleContent.set(rowId, title.value);
		memo.removeAttribute('readonly');
		memo.classList.toggle("changable")
		memoContent.set(rowId, memo.value);
	}
	else{
		title.classList.toggle("changable");
		title.setAttribute("readonly", "true");
		title.value = titleContent.get(rowId);
		titleContent.delete(rowId);
		memo.classList.toggle("changable")
		memo.setAttribute("readonly", "true");
		memo.value = memoContent.get(rowId);
		memoContent.delete(rowId)
	}
}