function formValidation()
{
var uname = document.registration.username;
var ukota = document.registration.kota;
var uadd = document.registration.alamat;
var uemail = document.registration.email;
var uphone = document.registration.nohp;
var uzip = document.registration.kodepos;
var uprov = document.registration.provinsi;
var ucomp = document.registration.company;
var ucadd = document.registartion.companyadd;
var uccpn = document.registration.companycpname;
var ucno = document.registration.companycpno;
var ucemail = document.registration.companyemail;
{
if(userid_validation(uname,5,10)){
    
}
if(kota_validation(ukota)){

}
if(alamat_validation(uadd)){
    
}

if(email_validation(uemail)){

}
if(provinsi_validation(uprov)){

}
if(comp_validation(ucomp)){

}
if(compcpname_validation(uccpn)){

}
if(compno_validation(ucno)){

}
if(compe_validation(ucemail)){

}
if(compadd_validation(ucadd)){

}
if(passid_validation(passid,7,12))
{
    if(allLetter(uname))
    {
        if(alphanumeric(uadd))
        { 
            if(alphanumeric(ukota))
            {
                if(numeric(uzip))
                {
                    if(ValidateEmail(uemail))
                    {
                        if(numeric(uzip))
                        {
                        }
                    } 
                }
            } 
        }
    }
    }
}
return false;

} function userid_validation(uname,mx,my)
{
var uname_len = uname.value.length;
if (uname_len == 0 || uname_len >= my || uname_len < mx)
{
alert("Nama harus diisi antara "+mx+" hingga "+my+" karakter");
uname.focus();
return false;
}
return true;
}
function kota_validation(ukota)
{
var ukota_len = ukota.value.length;
if (ukota_len == 0)
{
alert("Kota harus diisi");
ukota.focus();
return false;
}
return true;
}
function alamat_validation(uadd)
{
var uadd_len = uadd.value.length;
if (uadd_len == 0)
{
alert("Alamat harus diisi");
uadd.focus();
return false;
}
return true;
}
function provinsi_validation(uprov)
{
var uprov_len = uprov.value.length;
if (uprov_len == 0)
{
alert("Provinsi harus diisi");
uprov.focus();
return false;
}
return true;
}
function email_validation(uemail)
{
var uemail_len = uemail.value.length;
if (uemail_len == 0)
{
alert("E-Mail harus diisi");
uemail.focus();
return false;
}
return true;
}
function sponsor_validation(usponsor)
{
var len = usponsor.value.length;
if (len == 0)
{
alert("Sponsor harus diisi");
usponsor.focus();
return false;
}
return true;
}
function comp_validation(ucomp)
{
var len = ucomp.value.length;
if (len == 0)
{
alert("Nama perusahaan harus diisi");
ucomp.focus();
return false;
}
return true;
}
function compadd_validation(ucadd)
{
var len = ucadd.value.length;
if (len == 0)
{
alert("Alamat perusahaan harus diisi");
ucadd.focus();
return false;
}
return true;
}
function compcpname_validation(uccpn)
{
var len = uccpn.value.length;
if (len == 0)
{
alert("Nama kontak personal perusahaan harus diisi");
uccpn.focus();
return false;
}
return true;
}
function compno_validation(ucno)
{
var len = ucno.value.length;
if (len == 0)
{
alert("Nomor telepon perusahaan harus diisi");
ucno.focus();
return false;
}
return true;
}
function compe_validation(ucemail)
{
var len = ucemail.value.length;
if (len == 0)
{
alert("Email perusahaan harus diisi");
ucemail.focus();
return false;
}
return true;
}
function numeric(uzip){
    if(!numeric(uzip)) alert("kode pos harus berisikan angka");
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username hanya boleh mengandung karakter alfabet');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
alert('Form berhasil terkirim!');
window.location.reload()
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}