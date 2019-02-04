$(function() {
	$('#input').select();
	$('#input').change(displayDivisors);
	displayDivisors();
});

function displayDivisors() {
	let divisors = getDivisors(parseInt($('#input').val() ) );
	$('#output').html(divisors.join(', ') );
	$('#preview').html(parseInt($('#input').val() ) );
	$('#length').html(divisors.length + ' divisor' + (divisors.length==1 ? '' : 's') );
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