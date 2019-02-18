$(document).ready(function() {
	//set vertical middle center 
	var bodyHeight = $(document).height();
	$("body").css("height",bodyHeight+"px");

	var arrCharacter = {
		A : 1,
		B : 2,
		C : 3,
		D : 4,
		E : 5,
		F : 6,
		G : 7,
		H : 8,
		I : 9,
		J : 10,
		K : 11,
		L : 12,
		M : 13,
		N : 14,
		O : 15,
		P : 16,
		Q : 17,
		R : 18,
		S : 19,
		T : 20,
		U : 21,
		V : 22,
		W : 23,
		X : 24,
		Y : 25,
		Z : 26
	};

	var arrPrediksi = {
		set1 : "TUKANG PARKIR",
		set2 : "TUKANG GALI KUBUR",
		set3 : "ANGGOTA DPR",
		set4 : "DIREKTUR UTAMA",
		set5 : "KEPALA SEKOLAH",
		set6 : "TUKANG JAMU",
		set7 : "REPARASE GIGI KUDA",
		set8 : "MONTIR HANDA",
		set9 : "MENTERI PENDIDIKAN",
		set10 : "TUKANG TAMBAL BAN",
		set11 : "PENJAGA PINTU MAYAT",
		set12 : "SUPIR JOKOWI",
		set13 : "PETINJU",
		set14 : "JUARA ADU PANCO",
		set15 : "TUKANG MAKAN",
		set16 : "TUKANG BATU AKIK",
		set17 : "TUKANG TIPU",
		set18 : "BODYGUARD ARTIS",
		set19 : "TUKANG OJEK PANGKALAN",
		set20 : "KONSULTAN KEHAMILAN"

	};

	var totalPrediksi = 0;
	$.map(arrPrediksi, function (value, index){
		totalPrediksi = totalPrediksi + 1;
	});
	//form submit process
	$("#form-submit").submit(function() {
		//get fullname
		var fullname = $("input[name='fullname']").val();
		var strlength = fullname.length

		//validate
		if(fullname == '') {
			alert('Isi nama dahulu ya.');
		}else
		if(strlength < 5) {
				alert('Maaf, kami tidak dapat memprediksi panjang nama kurang dari 5');
		}else{
			//process prediksi
			//set fullname to uppercase
			fullname=fullname.toUpperCase();
			//loping fullname
			//set default to count total fullname
			var totalHitungCharacter=0;
			for(i=0;i<strlength;i++) {
				//get single character from fullname
				var character = fullname.substr(i,1);
				//search from arrCharacter
				$.map(arrCharacter, function(value, index) {
					if(character == index) {
						hitung = value;
						hitung = parseInt(hitung);
						totalHitungCharacter = totalHitungCharacter + hitung;
					}
				});
			}
			//logic compare totalPrediksi
			if(totalHitungCharacter > totalPrediksi) {
				//get modulus 
				totalHitungCharacter = totalHitungCharacter%totalPrediksi;
			}
			var resultKey = 'set'+totalHitungCharacter;
			// find prediksi from arrPrediksi
			$.map(arrPrediksi, function(value, index) {
				if (resultKey == index) {
					alert(value)
				}
			});
		}
		return false;
	});
});