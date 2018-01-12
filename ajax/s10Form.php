<?	
	if (!$_POST["s10Email"])
	{
		$msg_box["err"] = 1;
		$msg_box["text"] = "Ошибка отправки сообщения! Переданы не все данные";
		die(json_encode($msg_box));
	}
	else
	{
		include "class.phpmailer.php";
		
		$arFields = array(
			"<b>E-mail</b>"       		 => $_POST["s10Email"],
			"<b>Данные страницы: </b>" . $_SERVER["HTTP_REFERER"] ."<br>",
			"<b>Источник: </b>" => $_POST['source'],
			"<b>Тип рекламы: </b>" => $_POST['medium'],
			"<b>Ключевое слово: </b>" => $_POST['term'],
		);
		
		$text = "";
		foreach ($arFields as $nameField => $arField):
			$text .= $nameField.": ".$arField."<br/>";
		endforeach;
		
		$text .= "<br/>------------------------------------
				  <br/>Сообщение отправлено автоматически. Пожалуйста, не отвечайте на него"; 
		
		
		$mail = new PHPMailer(true); //defaults to using php "mail()"; the true param means it will throw exceptions on errors, which we need to catch
		try 
		{
	
			$mail->SetFrom('info@'.$_SERVER['HTTP_HOST'], 'Akropol');
			$mail->Subject = "СОВЕТЫ КАК ПОЛУЧИТЬ НОВОСТРОЙКУ АН «Акрополь»";

			$mail->MsgHTML($text);

			$text = str_replace("<br/>", "\n", $text); 
			$text = strip_tags($text);
			$mail->AltBody = $text;

			$mail->AddAddress('gol.anna@bk.ru');
            $mail->AddAddress('dmitriywhitex@ya.ru');
            $mail->AddAddress('simple.variable@gmail.com');
			$mail->AddAddress('le_ant@mail.ru');
			//$mail->AddAddress('gulyaich94@mail.ru');

			
			// отправляем наше письмо
			if($mail->Send())
			{
				$msg_box["err"] = 0;
				$msg_box["text"] = "Спасибо! Ваша заявка успешно отправлена";
				die(json_encode($msg_box));
			}
		}
		catch (phpmailerException $e) 
		{
			$msg_box["err"] = 1;
			$msg_box["text"] = "Ошибка отправки сообщения";
			die(json_encode($msg_box));
		}     
		catch (Exception $e) 
		{
			$msg_box["err"] = 1;
			$msg_box["text"] = "Ошибка отправки сообщения";
			die(json_encode($msg_box));
		}
		
	}
?>	

