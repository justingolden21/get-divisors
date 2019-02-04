$(function() {
	let url = new URL(window.location.href);
	let q = url.searchParams.get('q');
	$('#input').val(q || '1');

	$('#input').select();
	$('#input').change(displayDivisors);
	displayDivisors();
});

function displayDivisors() {
	let num = parseInt($('#input').val() );
	let divisors = getDivisors(num);
	$('#output').html(divisors.join(', ') );
	$('#preview').html(num);
	$('#length').html(divisors.length + ' divisor' + (divisors.length==1 ? '' : 's') );
	history.replaceState({}, '', '?q=' + num);
}

function getDivisors(num) {
	if(num>9999999) return [];

	let divisors = [];

	for(let mod = 0; mod <= num; mod++) {
		if(num % mod === 0)
			divisors.push(mod);
	}
	return divisors;
}