const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;


client.on("ready", () => { // When the bot is ready
    console.log("OK!"); // Log "Ready!"
});

client.on("message", async message => {
  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
	
	      if(message.content === "mbb xoa") { 
        message.channel.send("/xoah")
    }
	
	  if (command === "xoah") {
    setTimeout(prune, 1000); // Theoretically waits long enough to avoid 10008 error
    function prune() {
      // IDEA: Only delete messages sent by current user? Use other bot validation...
      message.channel.fetchMessages()
      .then(messages => {
        let message_array = messages.array();
        message_array.length = 10;
        message_array.map(msg => msg.delete().catch(console.log)); //.error
       })
      .catch(console.log); //.error
    }
  }

    if(message.content === "mbb" || message.content === "Mbb") { 
		message.channel.send("Con mèo duy nhất trên trái đất biết bay:");
	    message.channel.send("website: https://meobietbay.com/");
	     message.channel.send("Fanpge: " + "https://www.facebook.com/truyen.hay.cua.meo/");
	       message.channel.send("Tham gia group tại: " + "https://www.facebook.com/groups/meobietbay");
	     message.channel.send("Vào đây để xem hướng dẫn: #hướng-dẫn");
	    

    } 
	if(message.content === "facebook") { 
        message.channel.send("Tham gia group tại: " + "https://www.facebook.com/groups/meobietbay");
		message.channel.send("Fanpge: " + "https://www.facebook.com/truyen.hay.cua.meo/")
    }    
	
	if(message.content === "-ainz") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-ve-ainz-oaal-gown/")
    }    
    
	if(message.content === "-peroroncino") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-ve-peroroncino/")
    }    
	
	if(message.content === "-touchme") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-ve-touchme/")
    }    
	
	if(message.content === "-thủ vệ") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-ve-thu-ve-ho-gia/")
    } 
	
	if(message.content === "-zetsumei") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-ve-zesshi-zetsumei/")
    } 
	
	if(message.content === "-pandora") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-pandoras-actor/")
    } 
	
	if(message.content === "-frost dragon lord"||message.content ==="-haylilyal") { 
        message.channel.send("https://meobietbay.com/light-novel/overlord/gioi-thieu-olasirdarc-haylilyal/")
    } 
	
	
	
	//-----------------------------------------------------------------------------
	if(message.content === "i ov") { 
        message.channel.send("https://pm1.narvii.com/6948/28a401f11a9d69e59f2092ee24c2f121dae0d7edr1-1280-1708v2_hq.jpg")
	}
	if(message.content === "i touchme") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/3/37/Touch_Me_Databook.png/revision/latest?cb=20170319002900")
	}
	
	if(message.content === "i evileye") { 
        message.channel.send("https://i.pinimg.com/originals/10/f6/a3/10f6a3e7ad5066b833c15d0b864da0f9.jpg")
	}
	
	if(message.content === "i pandora") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/3/3b/Pandora%27s_Actor_Databook.png/revision/latest?cb=20170319002556")
	}
	
	if(message.content === "i miyoshi") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/d/d9/Miyoshi.png/revision/latest?cb=20180710153321")
	}
	
	
	if(message.content === "i ainz") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/5/52/Ainz_Anime_New.png/revision/latest?cb=20180908023943")
	}
	
	if(message.content === "i albedo") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/6/60/Albedo_Profile.png/revision/latest?cb=20170402092429")
    } 
	
	if(message.content === "i shalltear") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/1/1f/Shalltear_Bloodfallen_Profile.png/revision/latest?cb=20170513220734")
    } 
	
	if(message.content === "i demiurge") { 
        message.channel.send("https://vignette.wikia.nocookie.net/villains/images/9/92/Demiurge_Databook_01.png/revision/latest?cb=20180311195956")
    } 
	
	if(message.content === "i aura") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/4/4f/Aura.png/revision/latest?cb=20170519050046")
    } 
	
	if(message.content === "i mare") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/6/68/Mare.png/revision/latest?cb=20170519050207")
    } 
	
	if(message.content === "i cocytus") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/f/f3/Cocytus_Databook_01.png/revision/latest?cb=20170319001457")
    } 
	
	if(message.content === "i gargantua") { 
        message.channel.send("https://pm1.narvii.com/6939/d19fc4c261437c631edcc1feb78bd8d2b279c9a1r1-1280-720v2_hq.jpg")
    } 
	
	if(message.content === "i victim") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlord/images/2/2e/Victim.png/revision/latest?cb=20180722181901&path-prefix=es")
    } 
	
	if(message.content === "i sebas") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/c/c3/Sebas_Tian.png/revision/latest?cb=20150410111959")
    } 
	
	if(message.content === "i yuri") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/a/af/Yuri_Alpha_V2.png/revision/latest?cb=20171224074154")
    } 
	
	if(message.content === "i lupusregina") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/3/3a/Lupusregina_Beta.png/revision/latest?cb=20171224104320")
    } 
	
	if(message.content === "i entoma") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/c/cc/Entoma%27s_Profile.png/revision/latest?cb=20171224113500")
    } 
	
	if(message.content === "i cz") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/a/ac/CZ%27s_Profile_V2.png/revision/latest?cb=20171224081953")
    } 
	
	if(message.content === "i narberal") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/6/67/Narberal_Gamma_Profile.png/revision/latest?cb=20170319214106")
    } 
	
	if(message.content === "i solution") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/d/d4/Solution_Epsilon_Profile.png/revision/latest?cb=20171224072026")
    } 
	
	if(message.content === "i clementine") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/7/7b/Clementine.png/revision/latest/scale-to-width-down/310?cb=20150812135200")
    } 
	
	if(message.content === "i aureole") { 
        message.channel.send("https://vignette.wikia.nocookie.net/overlordmaruyama/images/6/68/AO.png/revision/latest?cb=20180508141743")
    } 
	
//----------------------------------------------------------------------------------------------------
	
	if(message.content === "-ln") { 
		message.channel.send("Light novel");
        message.channel.send("https://meobietbay.com/light-novel/")
    } 
	
	if(message.content === "ov gaiden p1") { 
		message.channel.send("The Vampire Princess of the Lost Country Prologue Part 1");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-gaiden/the-vampire-princess-of-the-lost-country-prologue-part-1/")
    } 
	
	if(message.content === "ov gaiden p2") { 
		message.channel.send("The Vampire Princess of the Lost Country Prologue Part 2");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-gaiden/the-vampire-princess-of-the-lost-country-prologue-part-2/")
    } 
	
		if(message.content === "ov gaiden p3") { 
		message.channel.send("The Vampire Princess of the Lost Country Prologue Part 3");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-gaiden/the-vampire-princess-of-the-lost-country-prologue-part-3/")
    } 
	
	
	if(message.content === "ov kn1") { 
		message.channel.send("Overlord Khởi Nguyên Chương 1");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-khoi-nguyen/overlord-khoi-nguyen-chuong-1/")
    } 
	
	if(message.content === "ov kn2") { 
		message.channel.send("Overlord Khởi Nguyên Chương 2");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-khoi-nguyen/overlord-khoi-nguyen-chuong-2/")
    } 
	
	if(message.content === "ov kn3") { 
		message.channel.send("Overlord Khởi Nguyên Chương 3");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-khoi-nguyen/overlord-khoi-nguyen-chuong-3/")
    } 
	
	if(message.content === "ov kn4") { 
		message.channel.send("Overlord Khởi Nguyên Chương 4");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-khoi-nguyen/overlord-khoi-nguyen-chuong-4/")
    } 
	
	if(message.content === "ov kn5") { 
		message.channel.send("Overlord Khởi Nguyên Chương 5");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-khoi-nguyen/overlord-khoi-nguyen-chuong-5/")
    } 
	
	if(message.content === "ov kn6") { 
		message.channel.send("Overlord Khởi Nguyên Chương 6");
        message.channel.send("https://meobietbay.com/light-novel/overlord/overlord-khoi-nguyen/overlord-khoi-nguyen-chuong-6/")
    } 
	
	if(message.content === "ov volume") { 
		message.channel.send("Dùng lệnh: ov v1 -> v14 để xem volume tập 1 hoặc thay 1 bằng tập cần tìm, ví dụ:");
		message.channel.send("ov v1")
    } 
	
	if(message.content === "ov v1") { 
		message.channel.send("Volume 1: The Undead King");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-1/");
    } 
	
	if(message.content === "ov v2") { 
	message.channel.send("Volume 2: The Dark Warrior");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-2/");
    } 
	if(message.content === "ov v3") { 
	message.channel.send("Volume 3: The Bloody Valkyrie");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-3/");
    } 
	
	if(message.content === "ov v4") { 
	message.channel.send("Volume 4: The Lizard Man Heroes");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-4/");
    } 
	
	if(message.content === "ov v5") { 
	message.channel.send("Volume 5: The Men in the Kingdom 1");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-5/");
    } 
	if(message.content === "ov v6") { 
	message.channel.send("Volume 6: The Men in the Kingdom 2");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-6/");
    }
	
	if(message.content === "ov v7") { 
	message.channel.send("Volume 7: The Invaders of the Large tomb");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-7/");
    }
	
	if(message.content === "ov v9") { 
		message.channel.send("Volume 9: The Magic Caster of Destroy");
        message.channel.send("Link: https://meobietbay.com/tag/overlord-tap-9/");
    } 
	
	if(message.content === "ov v10") { 
		message.channel.send("Volume 10: The Ruler of Conspiracy");
        message.channel.send("Link: https://meobietbay.com/tag/overlord-tap-10/")
    } 
	
	if(message.content === "ov v11") { 
		message.channel.send("Volume 11: The Craftsman of Dwarf");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-11/")
    } 
	
	if(message.content === "ov v12") { 
		message.channel.send("Volume 12: Roble Holy Kingdom");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-12/");
    } 
	
	if(message.content === "ov v13") { 
		message.channel.send("Volume 13: The Paladin of the Holy Kingdom");
        message.channel.send("Link: https://meobietbay.com/category/light-novel/overlord/overlord-tap-13/page/3/");
    } 
		if(message.content === "ov gaiden e") { 
		message.channel.send("Overlord Gaiden Prologue: Vampire of a Ruined Country");
        message.channel.send("Link: https://meobietbay.com/light-novel/overlord/overlord-english/overlord-gaiden-prologue/");
    } 
	if(message.content === "ov gaiden md" || message.content === "Ov gaiden md") { 
		message.channel.send("Overlord Gaiden Prologue: Vampire of a Ruined Country");
        message.channel.send("Link: https://meobietbay.com/light-novel/overlord/overlord-gaiden/overlord-gaiden-mo-dau/");
    } 	
	
	if(message.content === "ov vampire" || message.content === "Ov vampire") { 
		message.channel.send("Overlord Công Chúa Vampire Của Đất Nước Bị Lãng Quên Mở Đầu");
        message.channel.send("https://meobietbay.com/category/light-novel/overlord/overlord-gaiden/");
    } 	

	//----Vol 14----
	if(message.content === "ov v14" || message.content === "Ov v14") { 
		message.channel.send("Overlord Volume 14: The Witch of the Falling Kingdom");
        message.channel.send("https://meobietbay.com/category/light-novel/overlord/overlord-tap-14/");
    } 
	
});

client.login(process.env.botToken);
