import React from "react";

function CountrySelect({ handleChange, formData, setMobileCode }) {

	const handleCountryChange = (e) => {
		const mobileCode = e.target.options[e.target.selectedIndex].getAttribute('data-mobile_code');
		handleChange(e); 
		setMobileCode(mobileCode)
	};

	return (
		<select
			className="form__item--input select--input signup__country"
			id="country"
			name="country"
			required
			onChange={(e) => handleCountryChange(e)}
			value={formData.country}
		>
			<option data-mobile_code={93} data-code="AF" value="Afghanistan">
				Afghanistan
			</option>
			<option data-mobile_code={358} data-code="AX" value="Aland Islands">
				Aland Islands
			</option>
			<option data-mobile_code={355} data-code="AL" value="Albania">
				Albania
			</option>
			<option data-mobile_code={213} data-code="DZ" value="Algeria">
				Algeria
			</option>
			<option data-mobile_code={1684} data-code="AS" value="AmericanSamoa">
				AmericanSamoa
			</option>
			<option data-mobile_code={376} data-code="AD" value="Andorra">
				Andorra
			</option>
			<option data-mobile_code={244} data-code="AO" value="Angola">
				Angola
			</option>
			<option data-mobile_code={1264} data-code="AI" value="Anguilla">
				Anguilla
			</option>
			<option data-mobile_code={672} data-code="AQ" value="Antarctica">
				Antarctica
			</option>
			<option data-mobile_code={1268} data-code="AG" value="Antigua and Barbuda">
				Antigua and Barbuda
			</option>
			<option data-mobile_code={54} data-code="AR" value="Argentina">
				Argentina
			</option>
			<option data-mobile_code={374} data-code="AM" value="Armenia">
				Armenia
			</option>
			<option data-mobile_code={297} data-code="AW" value="Aruba">
				Aruba
			</option>
			<option data-mobile_code={61} data-code="AU" value="Australia">
				Australia
			</option>
			<option data-mobile_code={43} data-code="AT" value="Austria">
				Austria
			</option>
			<option data-mobile_code={994} data-code="AZ" value="Azerbaijan">
				Azerbaijan
			</option>
			<option data-mobile_code={1242} data-code="BS" value="Bahamas">
				Bahamas
			</option>
			<option data-mobile_code={973} data-code="BH" value="Bahrain">
				Bahrain
			</option>
			<option data-mobile_code={880} data-code="BD" value="Bangladesh">
				Bangladesh
			</option>
			<option data-mobile_code={1246} data-code="BB" value="Barbados">
				Barbados
			</option>
			<option data-mobile_code={375} data-code="BY" value="Belarus">
				Belarus
			</option>
			<option data-mobile_code={32} data-code="BE" value="Belgium">
				Belgium
			</option>
			<option data-mobile_code={501} data-code="BZ" value="Belize">
				Belize
			</option>
			<option data-mobile_code={229} data-code="BJ" value="Benin">
				Benin
			</option>
			<option data-mobile_code={1441} data-code="BM" value="Bermuda">
				Bermuda
			</option>
			<option data-mobile_code={975} data-code="BT" value="Bhutan">
				Bhutan
			</option>
			<option data-mobile_code={591} data-code="BO" value="Plurinational State of Bolivia">
				Plurinational State of Bolivia
			</option>
			<option data-mobile_code={387} data-code="BA" value="Bosnia and Herzegovina">
				Bosnia and Herzegovina
			</option>
			<option data-mobile_code={267} data-code="BW" value="Botswana">
				Botswana
			</option>
			<option data-mobile_code={55} data-code="BR" value="Brazil">
				Brazil
			</option>
			<option data-mobile_code={246} data-code="IO" value="British Indian Ocean Territory">
				British Indian Ocean Territory
			</option>
			<option data-mobile_code={673} data-code="BN" value="Brunei Darussalam">
				Brunei Darussalam
			</option>
			<option data-mobile_code={359} data-code="BG" value="Bulgaria">
				Bulgaria
			</option>
			<option data-mobile_code={226} data-code="BF" value="Burkina Faso">
				Burkina Faso
			</option>
			<option data-mobile_code={257} data-code="BI" value="Burundi">
				Burundi
			</option>
			<option data-mobile_code={855} data-code="KH" value="Cambodia">
				Cambodia
			</option>
			<option data-mobile_code={237} data-code="CM" value="Cameroon">
				Cameroon
			</option>
			<option data-mobile_code={1} data-code="CA" value="Canada">
				Canada
			</option>
			<option data-mobile_code={238} data-code="CV" value="Cape Verde">
				Cape Verde
			</option>
			<option data-mobile_code={345} data-code="KY" value="Cayman Islands">
				Cayman Islands
			</option>
			<option data-mobile_code={236} data-code="CF" value="Central African Republic">
				Central African Republic
			</option>
			<option data-mobile_code={235} data-code="TD" value="Chad">
				Chad
			</option>
			<option data-mobile_code={56} data-code="CL" value="Chile">
				Chile
			</option>
			<option data-mobile_code={86} data-code="CN" value="China">
				China
			</option>
			<option data-mobile_code={61} data-code="CX" value="Christmas Island">
				Christmas Island
			</option>
			<option data-mobile_code={61} data-code="CC" value="Cocos (Keeling) Islands">
				Cocos (Keeling) Islands
			</option>
			<option data-mobile_code={57} data-code="CO" value="Colombia">
				Colombia
			</option>
			<option data-mobile_code={269} data-code="KM" value="Comoros">
				Comoros
			</option>
			<option data-mobile_code={242} data-code="CG" value="Congo">
				Congo
			</option>
			<option
				data-mobile_code={243}
				data-code="CD"
				value="The Democratic Republic of the Congo"
			>
				The Democratic Republic of the Congo
			</option>
			<option data-mobile_code={682} data-code="CK" value="Cook Islands">
				Cook Islands
			</option>
			<option data-mobile_code={506} data-code="CR" value="Costa Rica">
				Costa Rica
			</option>
			<option data-mobile_code={225} data-code="CI" value="Cote d'Ivoire">
				Cote d 'Ivoire
			</option>
			<option data-mobile_code={385} data-code="HR" value="Croatia">
				Croatia
			</option>
			<option data-mobile_code={53} data-code="CU" value="Cuba">
				Cuba
			</option>
			<option data-mobile_code={357} data-code="CY" value="Cyprus">
				Cyprus
			</option>
			<option data-mobile_code={420} data-code="CZ" value="Czech Republic">
				Czech Republic
			</option>
			<option data-mobile_code={45} data-code="DK" value="Denmark">
				Denmark
			</option>
			<option data-mobile_code={253} data-code="DJ" value="Djibouti">
				Djibouti
			</option>
			<option data-mobile_code={1767} data-code="DM" value="Dominica">
				Dominica
			</option>
			<option data-mobile_code={1849} data-code="DO" value="Dominican Republic">
				Dominican Republic
			</option>
			<option data-mobile_code={593} data-code="EC" value="Ecuador">
				Ecuador
			</option>
			<option data-mobile_code={20} data-code="EG" value="Egypt">
				Egypt
			</option>
			<option data-mobile_code={503} data-code="SV" value="El Salvador">
				El Salvador
			</option>
			<option data-mobile_code={240} data-code="GQ" value="Equatorial Guinea">
				Equatorial Guinea
			</option>
			<option data-mobile_code={291} data-code="ER" value="Eritrea">
				Eritrea
			</option>
			<option data-mobile_code={372} data-code="EE" value="Estonia">
				Estonia
			</option>
			<option data-mobile_code={251} data-code="ET" value="Ethiopia">
				Ethiopia
			</option>
			<option data-mobile_code={500} data-code="FK" value="Falkland Islands (Malvinas)">
				Falkland Islands (Malvinas)
			</option>
			<option data-mobile_code={298} data-code="FO" value="Faroe Islands">
				Faroe Islands
			</option>
			<option data-mobile_code={679} data-code="FJ" value="Fiji">
				Fiji
			</option>
			<option data-mobile_code={358} data-code="FI" value="Finland">
				Finland
			</option>
			<option data-mobile_code={33} data-code="FR" value="France">
				France
			</option>
			<option data-mobile_code={594} data-code="GF" value="French Guiana">
				French Guiana
			</option>
			<option data-mobile_code={689} data-code="PF" value="French Polynesia">
				French Polynesia
			</option>
			<option data-mobile_code={241} data-code="GA" value="Gabon">
				Gabon
			</option>
			<option data-mobile_code={220} data-code="GM" value="Gambia">
				Gambia
			</option>
			<option data-mobile_code={995} data-code="GE" value="Georgia">
				Georgia
			</option>
			<option data-mobile_code={49} data-code="DE" value="Germany">
				Germany
			</option>
			<option data-mobile_code={233} data-code="GH" value="Ghana">
				Ghana
			</option>
			<option data-mobile_code={350} data-code="GI" value="Gibraltar">
				Gibraltar
			</option>
			<option data-mobile_code={30} data-code="GR" value="Greece">
				Greece
			</option>
			<option data-mobile_code={299} data-code="GL" value="Greenland">
				Greenland
			</option>
			<option data-mobile_code={1473} data-code="GD" value="Grenada">
				Grenada
			</option>
			<option data-mobile_code={590} data-code="GP" value="Guadeloupe">
				Guadeloupe
			</option>
			<option data-mobile_code={1671} data-code="GU" value="Guam">
				Guam
			</option>
			<option data-mobile_code={502} data-code="GT" value="Guatemala">
				Guatemala
			</option>
			<option data-mobile_code={44} data-code="GG" value="Guernsey">
				Guernsey
			</option>
			<option data-mobile_code={224} data-code="GN" value="Guinea">
				Guinea
			</option>
			<option data-mobile_code={245} data-code="GW" value="Guinea-Bissau">
				Guinea-Bissau
			</option>
			<option data-mobile_code={595} data-code="GY" value="Guyana">
				Guyana
			</option>
			<option data-mobile_code={509} data-code="HT" value="Haiti">
				Haiti
			</option>
			<option data-mobile_code={379} data-code="VA" value="Holy See (Vatican City State)">
				Holy See (Vatican City State)
			</option>
			<option data-mobile_code={504} data-code="HN" value="Honduras">
				Honduras
			</option>
			<option data-mobile_code={852} data-code="HK" value="Hong Kong">
				Hong Kong
			</option>
			<option data-mobile_code={36} data-code="HU" value="Hungary">
				Hungary
			</option>
			<option data-mobile_code={354} data-code="IS" value="Iceland">
				Iceland
			</option>
			<option data-mobile_code={91} data-code="IN" value="India">
				India
			</option>
			<option data-mobile_code={62} data-code="ID" value="Indonesia">
				Indonesia
			</option>
			<option
				data-mobile_code={98}
				data-code="IR"
				value="Iran, Islamic Republic of Persian Gulf"
			>
				Iran, Islamic Republic of Persian Gulf
			</option>
			<option data-mobile_code={964} data-code="IQ" value="Iraq">
				Iraq
			</option>
			<option data-mobile_code={353} data-code="IE" value="Ireland">
				Ireland
			</option>
			<option data-mobile_code={44} data-code="IM" value="Isle of Man">
				Isle of Man
			</option>
			<option data-mobile_code={972} data-code="IL" value="Israel">
				Israel
			</option>
			<option data-mobile_code={39} data-code="IT" value="Italy">
				Italy
			</option>
			<option data-mobile_code={1876} data-code="JM" value="Jamaica">
				Jamaica
			</option>
			<option data-mobile_code={81} data-code="JP" value="Japan">
				Japan
			</option>
			<option data-mobile_code={44} data-code="JE" value="Jersey">
				Jersey
			</option>
			<option data-mobile_code={962} data-code="JO" value="Jordan">
				Jordan
			</option>
			<option data-mobile_code={77} data-code="KZ" value="Kazakhstan">
				Kazakhstan
			</option>
			<option data-mobile_code={254} data-code="KE" value="Kenya">
				Kenya
			</option>
			<option data-mobile_code={686} data-code="KI" value="Kiribati">
				Kiribati
			</option>
			<option
				data-mobile_code={850}
				data-code="KP"
				value="Democratic People's Republic of Korea"
			>
				Democratic People 's Republic of Korea
			</option>
			<option data-mobile_code={82} data-code="KR" value="Republic of South Korea">
				Republic of South Korea
			</option>
			<option data-mobile_code={965} data-code="KW" value="Kuwait">
				Kuwait
			</option>
			<option data-mobile_code={996} data-code="KG" value="Kyrgyzstan">
				Kyrgyzstan
			</option>
			<option data-mobile_code={856} data-code="LA" value="Laos">
				Laos
			</option>
			<option data-mobile_code={371} data-code="LV" value="Latvia">
				Latvia
			</option>
			<option data-mobile_code={961} data-code="LB" value="Lebanon">
				Lebanon
			</option>
			<option data-mobile_code={266} data-code="LS" value="Lesotho">
				Lesotho
			</option>
			<option data-mobile_code={231} data-code="LR" value="Liberia">
				Liberia
			</option>
			<option data-mobile_code={218} data-code="LY" value="Libyan Arab Jamahiriya">
				Libyan Arab Jamahiriya
			</option>
			<option data-mobile_code={423} data-code="LI" value="Liechtenstein">
				Liechtenstein
			</option>
			<option data-mobile_code={370} data-code="LT" value="Lithuania">
				Lithuania
			</option>
			<option data-mobile_code={352} data-code="LU" value="Luxembourg">
				Luxembourg
			</option>
			<option data-mobile_code={853} data-code="MO" value="Macao">
				Macao
			</option>
			<option data-mobile_code={389} data-code="MK" value="Macedonia">
				Macedonia
			</option>
			<option data-mobile_code={261} data-code="MG" value="Madagascar">
				Madagascar
			</option>
			<option data-mobile_code={265} data-code="MW" value="Malawi">
				Malawi
			</option>
			<option data-mobile_code={60} data-code="MY" value="Malaysia">
				Malaysia
			</option>
			<option data-mobile_code={960} data-code="MV" value="Maldives">
				Maldives
			</option>
			<option data-mobile_code={223} data-code="ML" value="Mali">
				Mali
			</option>
			<option data-mobile_code={356} data-code="MT" value="Malta">
				Malta
			</option>
			<option data-mobile_code={692} data-code="MH" value="Marshall Islands">
				Marshall Islands
			</option>
			<option data-mobile_code={596} data-code="MQ" value="Martinique">
				Martinique
			</option>
			<option data-mobile_code={222} data-code="MR" value="Mauritania">
				Mauritania
			</option>
			<option data-mobile_code={230} data-code="MU" value="Mauritius">
				Mauritius
			</option>
			<option data-mobile_code={262} data-code="YT" value="Mayotte">
				Mayotte
			</option>
			<option data-mobile_code={52} data-code="MX" value="Mexico">
				Mexico
			</option>
			<option data-mobile_code={691} data-code="FM" value="Federated States of Micronesia">
				Federated States of Micronesia
			</option>
			<option data-mobile_code={373} data-code="MD" value="Moldova">
				Moldova
			</option>
			<option data-mobile_code={377} data-code="MC" value="Monaco">
				Monaco
			</option>
			<option data-mobile_code={976} data-code="MN" value="Mongolia">
				Mongolia
			</option>
			<option data-mobile_code={382} data-code="ME" value="Montenegro">
				Montenegro
			</option>
			<option data-mobile_code={1664} data-code="MS" value="Montserrat">
				Montserrat
			</option>
			<option data-mobile_code={212} data-code="MA" value="Morocco">
				Morocco
			</option>
			<option data-mobile_code={258} data-code="MZ" value="Mozambique">
				Mozambique
			</option>
			<option data-mobile_code={95} data-code="MM" value="Myanmar">
				Myanmar
			</option>
			<option data-mobile_code={264} data-code="NA" value="Namibia">
				Namibia
			</option>
			<option data-mobile_code={674} data-code="NR" value="Nauru">
				Nauru
			</option>
			<option data-mobile_code={977} data-code="NP" value="Nepal">
				Nepal
			</option>
			<option data-mobile_code={31} data-code="NL" value="Netherlands">
				Netherlands
			</option>
			<option data-mobile_code={599} data-code="AN" value="Netherlands Antilles">
				Netherlands Antilles
			</option>
			<option data-mobile_code={687} data-code="NC" value="New Caledonia">
				New Caledonia
			</option>
			<option data-mobile_code={64} data-code="NZ" value="New Zealand">
				New Zealand
			</option>
			<option data-mobile_code={505} data-code="NI" value="Nicaragua">
				Nicaragua
			</option>
			<option data-mobile_code={227} data-code="NE" value="Niger">
				Niger
			</option>
			<option data-mobile_code={234} data-code="NG" value="Nigeria" selected="selected">
				Nigeria
			</option>
			<option data-mobile_code={683} data-code="NU" value="Niue">
				Niue
			</option>
			<option data-mobile_code={672} data-code="NF" value="Norfolk Island">
				Norfolk Island
			</option>
			<option data-mobile_code={1670} data-code="MP" value="Northern Mariana Islands">
				Northern Mariana Islands
			</option>
			<option data-mobile_code={47} data-code="NO" value="Norway">
				Norway
			</option>
			<option data-mobile_code={968} data-code="OM" value="Oman">
				Oman
			</option>
			<option data-mobile_code={92} data-code="PK" value="Pakistan">
				Pakistan
			</option>
			<option data-mobile_code={680} data-code="PW" value="Palau">
				Palau
			</option>
			<option data-mobile_code={970} data-code="PS" value="Palestinian Territory">
				Palestinian Territory
			</option>
			<option data-mobile_code={507} data-code="PA" value="Panama">
				Panama
			</option>
			<option data-mobile_code={675} data-code="PG" value="Papua New Guinea">
				Papua New Guinea
			</option>
			<option data-mobile_code={595} data-code="PY" value="Paraguay">
				Paraguay
			</option>
			<option data-mobile_code={51} data-code="PE" value="Peru">
				Peru
			</option>
			<option data-mobile_code={63} data-code="PH" value="Philippines">
				Philippines
			</option>
			<option data-mobile_code={872} data-code="PN" value="Pitcairn">
				Pitcairn
			</option>
			<option data-mobile_code={48} data-code="PL" value="Poland">
				Poland
			</option>
			<option data-mobile_code={351} data-code="PT" value="Portugal">
				Portugal
			</option>
			<option data-mobile_code={1939} data-code="PR" value="Puerto Rico">
				Puerto Rico
			</option>
			<option data-mobile_code={974} data-code="QA" value="Qatar">
				Qatar
			</option>
			<option data-mobile_code={40} data-code="RO" value="Romania">
				Romania
			</option>
			<option data-mobile_code={7} data-code="RU" value="Russia">
				Russia
			</option>
			<option data-mobile_code={250} data-code="RW" value="Rwanda">
				Rwanda
			</option>
			<option data-mobile_code={262} data-code="RE" value="Reunion">
				Reunion
			</option>
			<option data-mobile_code={590} data-code="BL" value="Saint Barthelemy">
				Saint Barthelemy
			</option>
			<option data-mobile_code={290} data-code="SH" value="Saint Helena">
				Saint Helena
			</option>
			<option data-mobile_code={1869} data-code="KN" value="Saint Kitts and Nevis">
				Saint Kitts and Nevis
			</option>
			<option data-mobile_code={1758} data-code="LC" value="Saint Lucia">
				Saint Lucia
			</option>
			<option data-mobile_code={590} data-code="MF" value="Saint Martin">
				Saint Martin
			</option>
			<option data-mobile_code={508} data-code="PM" value="Saint Pierre and Miquelon">
				Saint Pierre and Miquelon
			</option>
			<option data-mobile_code={1784} data-code="VC" value="Saint Vincent and the Grenadines">
				Saint Vincent and the Grenadines
			</option>
			<option data-mobile_code={685} data-code="WS" value="Samoa">
				Samoa
			</option>
			<option data-mobile_code={378} data-code="SM" value="San Marino">
				San Marino
			</option>
			<option data-mobile_code={239} data-code="ST" value="Sao Tome and Principe">
				Sao Tome and Principe
			</option>
			<option data-mobile_code={966} data-code="SA" value="Saudi Arabia">
				Saudi Arabia
			</option>
			<option data-mobile_code={221} data-code="SN" value="Senegal">
				Senegal
			</option>
			<option data-mobile_code={381} data-code="RS" value="Serbia">
				Serbia
			</option>
			<option data-mobile_code={248} data-code="SC" value="Seychelles">
				Seychelles
			</option>
			<option data-mobile_code={232} data-code="SL" value="Sierra Leone">
				Sierra Leone
			</option>
			<option data-mobile_code={65} data-code="SG" value="Singapore">
				Singapore
			</option>
			<option data-mobile_code={421} data-code="SK" value="Slovakia">
				Slovakia
			</option>
			<option data-mobile_code={386} data-code="SI" value="Slovenia">
				Slovenia
			</option>
			<option data-mobile_code={677} data-code="SB" value="Solomon Islands">
				Solomon Islands
			</option>
			<option data-mobile_code={252} data-code="SO" value="Somalia">
				Somalia
			</option>
			<option data-mobile_code={27} data-code="ZA" value="South Africa">
				South Africa
			</option>
			<option data-mobile_code={211} data-code="SS" value="South Sudan">
				South Sudan
			</option>
			<option
				data-mobile_code={500}
				data-code="GS"
				value="South Georgia and the South Sandwich Islands"
			>
				South Georgia and the South Sandwich Islands
			</option>
			<option data-mobile_code={34} data-code="ES" value="Spain">
				Spain
			</option>
			<option data-mobile_code={94} data-code="LK" value="Sri Lanka">
				Sri Lanka
			</option>
			<option data-mobile_code={249} data-code="SD" value="Sudan">
				Sudan
			</option>
			<option data-mobile_code={597} data-code="SR" value="Suricountry">
				Suricountry
			</option>
			<option data-mobile_code={47} data-code="SJ" value="Svalbard and Jan Mayen">
				Svalbard and Jan Mayen
			</option>
			<option data-mobile_code={268} data-code="SZ" value="Swaziland">
				Swaziland
			</option>
			<option data-mobile_code={46} data-code="SE" value="Sweden">
				Sweden
			</option>
			<option data-mobile_code={41} data-code="CH" value="Switzerland">
				Switzerland
			</option>
			<option data-mobile_code={963} data-code="SY" value="Syrian Arab Republic">
				Syrian Arab Republic
			</option>
			<option data-mobile_code={886} data-code="TW" value="Taiwan">
				Taiwan
			</option>
			<option data-mobile_code={992} data-code="TJ" value="Tajikistan">
				Tajikistan
			</option>
			<option data-mobile_code={255} data-code="TZ" value="Tanzania">
				Tanzania
			</option>
			<option data-mobile_code={66} data-code="TH" value="Thailand">
				Thailand
			</option>
			<option data-mobile_code={670} data-code="TL" value="Timor-Leste">
				Timor-Leste
			</option>
			<option data-mobile_code={228} data-code="TG" value="Togo">
				Togo
			</option>
			<option data-mobile_code={690} data-code="TK" value="Tokelau">
				Tokelau
			</option>
			<option data-mobile_code={676} data-code="TO" value="Tonga">
				Tonga
			</option>
			<option data-mobile_code={1868} data-code="TT" value="Trinidad and Tobago">
				Trinidad and Tobago
			</option>
			<option data-mobile_code={216} data-code="TN" value="Tunisia">
				Tunisia
			</option>
			<option data-mobile_code={90} data-code="TR" value="Turkey">
				Turkey
			</option>
			<option data-mobile_code={993} data-code="TM" value="Turkmenistan">
				Turkmenistan
			</option>
			<option data-mobile_code={1649} data-code="TC" value="Turks and Caicos Islands">
				Turks and Caicos Islands
			</option>
			<option data-mobile_code={688} data-code="TV" value="Tuvalu">
				Tuvalu
			</option>
			<option data-mobile_code={256} data-code="UG" value="Uganda">
				Uganda
			</option>
			<option data-mobile_code={380} data-code="UA" value="Ukraine">
				Ukraine
			</option>
			<option data-mobile_code={971} data-code="AE" value="United Arab Emirates">
				United Arab Emirates
			</option>
			<option data-mobile_code={44} data-code="GB" value="United Kingdom">
				United Kingdom
			</option>
			<option data-mobile_code={1} data-code="US" value="United States">
				United States
			</option>
			<option data-mobile_code={598} data-code="UY" value="Uruguay">
				Uruguay
			</option>
			<option data-mobile_code={998} data-code="UZ" value="Uzbekistan">
				Uzbekistan
			</option>
			<option data-mobile_code={678} data-code="VU" value="Vanuatu">
				Vanuatu
			</option>
			<option data-mobile_code={58} data-code="VE" value="Venezuela">
				Venezuela
			</option>
			<option data-mobile_code={84} data-code="VN" value="Vietnam">
				Vietnam
			</option>
			<option data-mobile_code={1284} data-code="VG" value="British Virgin Islands">
				British Virgin Islands
			</option>
			<option data-mobile_code={1340} data-code="VI" value="U.S. Virgin Islands">
				U.S. Virgin Islands
			</option>
			<option data-mobile_code={681} data-code="WF" value="Wallis and Futuna">
				Wallis and Futuna
			</option>
			<option data-mobile_code={967} data-code="YE" value="Yemen">
				Yemen
			</option>
			<option data-mobile_code={260} data-code="ZM" value="Zambia">
				Zambia
			</option>
			<option data-mobile_code={263} data-code="ZW" value="Zimbabwe">
				Zimbabwe
			</option>
		</select>
	);
}

export default CountrySelect;
