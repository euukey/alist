import{bB as s}from"./index.7f3abd4d.js";const r="Backup",i="Restore",n="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",f={backup:r,restore:i,start_backup:n,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h},g={paths:"Paths"},m={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},y={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS in Beijing, you can turn it on to boost the upload speed",oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},b={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},k={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},w={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},v={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},S={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},C={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},P={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},x={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},A={baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},R={mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},T={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},D={email:"Email",password:"Password"},U={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},O={password:"Password",root_folder_id:"Root folder id",username:"Username"},z={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},L={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},B={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},F={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},M={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},j={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},q={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id"},E={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},N={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},V={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},I={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},G={bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},Y={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},Q={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},W={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},H={"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},FTP:{},GoogleDrive:{},GooglePhoto:{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},Onedrive:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},USS:{},Virtual:{},WebDav:{},YandexDisk:{}},$={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",USS:"USS",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},K={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},Alias:g,Aliyundrive:m,AliyundriveOpen:y,AliyundriveShare:b,BaiduNetdisk:k,BaiduPhoto:w,BaiduShare:v,Cloudreve:S,FTP:C,GoogleDrive:P,GooglePhoto:x,Lanzou:A,Local:R,MediaTrack:T,Mega_nz:D,Onedrive:U,PikPak:O,PikPakShare:z,Quark:L,S3:B,SFTP:F,SMB:M,Seafile:j,Teambition:q,Terabox:E,Thunder:N,ThunderExpert:V,Trainbit:I,USS:G,Virtual:Y,WebDav:Q,YandexDisk:W,config:H,drivers:$},J="Refresh",X="Add",Z="Edit",ee="Save",oe="Update",te="Copied",se="Deleted successfully",re="Saved successfully",ie="Updated successfully",ne="Choose",ae="Confirm",de="Cancel",ce="Are you sure you want to delete [{{name}}]?",le="Operations",_e="Yes",pe="No",ue="Clear",he="Select folder",fe="Select folder or input path",ge="Disable",me="Enable",ye="OK",be="Back",ke="Have an account?",we="Go to login",ve="Close",Se="Not currently supported",Ce="Please enter",Pe={refresh:J,add:X,edit:Z,delete:"Delete",save:ee,update:oe,copied:te,delete_success:se,save_success:re,update_success:ie,choose:ne,confirm:ae,cancel:de,delete_confirm:ce,operations:le,yes:_e,no:pe,clear:ue,choose_folder:he,choose_or_input_path:fe,disable:ge,enable:me,ok:ye,back:be,have_account:ke,go_login:we,close:ve,no_support_now:Se,empty_input:Ce},xe={name:"Name",size:"Size",modified:"Modified"},Ae={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing"},Re={list:"List View",grid:"Grid View",image:"Image View"},Te="No images in the current folder",De="Load more",Ue="No more",Oe="Please input password",ze={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},Le={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},Be={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},Fe={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Me={powered_by:"Powered by AList",manage:"Manage"},je={search:"Search",no_result:"No result yet"},qe="Failed fetching settings: ",Ee="Failed get current user: ",Ne={obj:xe,preview:Ae,layouts:Re,no_images:Te,load_more:De,no_more:Ue,input_password:Oe,toolbar:ze,upload:Le,local_settings:Be,package_download:Fe,footer:Me,search:je,fetching_settings_failed:qe,get_current_user_failed:Ee,"Loading storage, please wait":"Loading storage, please wait"},Ve="Search index",Ie="Current indexes",Ge="Build indexes",Ye="Rebuild indexes",Qe="Paths to update",We="Max depth",He="Update indexes",$e="Object count",Ke="Last done time",Je="Unknown",Xe="Stop",Ze="Clear",eo="Error",oo={search_index:Ve,current:Ie,build:Ge,rebuild:Ye,paths_to_update:Qe,max_depth:We,update:He,obj_count:$e,last_done_time:Ke,unknown:Je,stop:Xe,clear:Ze,error:eo},to="Login to the",so="Remember me",ro="Forget password?",io="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",no="Clear",ao="Login",co="Browse as a guest",lo="Login successfully",_o={login_to:to,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:so,forget:ro,forget_url:io,clear:no,login:ao,use_guest:co,success:lo},po={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",qbit:"qBittorrent",docs:"Documentation"},uo="AList Manage",ho="You are not admin user, please login with admin account.",fo="Logout successfully",go="Send",mo="Receive",yo="Received messages",bo={sidemenu:po,title:uo,not_admin:ho,logout_success:fo,send:go,receive:mo,received_msgs:yo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},ko="Path",wo="Password",vo="Write",So="Hide",Co="Readme",Po="Apply to sub folder",xo="One regular expression per line",Ao="Support markdown content or markdown link",Ro={path:ko,password:wo,write:vo,hide:So,readme:Co,apply_sub:Po,hide_help:xo,readme_help:Ao},To="Allow indexed",Do="Announcement",Uo="Aria2 secret",Oo="Aria2 uri",zo="Audio autoplay",Lo="Audio cover",Bo="Audio types",Fo="Auto update index",Mo="Customize body",jo="Customize head",qo="Default page size",Eo="External previews",No="Favicon",Vo="Filename char mapping",Io="Forward direct link params",Go="Hide files",Yo="Home container",Qo={hope_container:"Hope container",max_980px:"Max 980px"},Wo="Home icon",Ho="Iframe previews",$o="Ignore paths",Ko="Image types",Jo="Index progress",Xo="Link expiration",Zo="Logo",et="Main color",ot="Max index depth",tt="Ocr api",st="Package download",rt="Pagination type",it={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},nt="Privacy regs",at="Proxy ignore headers",dt="Proxy types",ct="Qbittorrent seedtime",lt="Qbittorrent url",_t="Search index",pt={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},ut="Settings layout",ht={list:"List",responsive:"Responsive"},ft="Sign all",gt="Site title",mt="Sso client id",yt="Sso client secret",bt="Sso login enabled",kt="Sso login platform",wt={Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft"},vt="Text types",St="Token",Ct="Version",Pt="Video autoplay",xt="Video types",At={allow_indexed:To,announcement:Do,aria2_secret:Uo,aria2_uri:Oo,audio_autoplay:zo,audio_cover:Lo,audio_types:Bo,auto_update_index:Fo,customize_body:Mo,customize_head:jo,default_page_size:qo,external_previews:Eo,favicon:No,filename_char_mapping:Vo,forward_direct_link_params:Io,hide_files:Go,home_container:Yo,home_containers:Qo,home_icon:Wo,iframe_previews:Ho,ignore_paths:$o,"ignore_paths-tips":"one path per line",image_types:Ko,index_progress:Jo,link_expiration:Xo,logo:Zo,main_color:et,max_index_depth:ot,"max_index_depth-tips":"max depth of index",ocr_api:tt,package_download:st,pagination_type:rt,pagination_types:it,privacy_regs:nt,proxy_ignore_headers:at,proxy_types:dt,qbittorrent_seedtime:ct,qbittorrent_url:lt,search_index:_t,search_indexs:pt,settings_layout:ut,settings_layouts:ht,sign_all:ft,site_title:gt,sso_client_id:mt,sso_client_secret:yt,sso_login_enabled:bt,sso_login_platform:kt,sso_login_platforms:wt,text_types:vt,token:St,version:Ct,video_autoplay:Pt,video_types:xt},Rt="Aria2",Tt="Aria2 Version:",Dt="Set aria2",Ut="Copy Token",Ot="Reset Token",zt="Reset Token Successfully",Lt="Unknown type",Bt="Set qBittorrent",Ft="qBittorrent",Mt={aria2:Rt,aria2_version:Tt,set_aria2:Dt,copy_token:Ut,reset_token:Ot,reset_token_success:zt,unknown_type:Lt,set_qbit:Bt,qbittorrent:Ft},jt={start_load_success:"Start loading",load_all:"Reload All",mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}},qt={common:jt},Et="Download file to local machine",Nt="Transfer downloaded file to corresponding storage",Vt="Download file to local machine",It="Transfer downloaded file to corresponding storage",Gt="Upload file to corresponding storage",Yt="Copy file from a storage to another storage",Qt="Completed",Wt="Running",Ht="Pending",$t="Running",Kt="Canceling",Jt="Succeeded",Xt="Canceled",Zt="Errored",es="Clear Succeeded",os="Retry",ts={aria2_down:Et,aria2_transfer:Nt,qbit_down:Vt,qbit_transfer:It,upload:Gt,copy:Yt,done:Qt,undone:Wt,pending:Ht,running:$t,canceling:Kt,succeeded:Jt,canceled:Xt,errored:Zt,clear_succeeded:es,retry:os},ss={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},rs="Username",is="Password",ns="Base path",as="Role",ds="Permission",cs="Disabled",ls="Available",_s="Update Profile",ps="Update profile successfully, please re-login.",us="Change Username",hs="Change Password",fs="Enable 2FA",gs="Scan the QR code to save the secret key",ms="Input the code of your 2FA app",ys="Verify",bs="So you cannot modify anything in the manage page.",ks="Single sign-on Login",ws="Connect Single sign-on Platform",vs="Disconnect Single sign-on Platform",Ss={permissions:ss,username:rs,password:is,base_path:ns,role:as,permission:ds,disabled:cs,available:ls,update_profile:_s,update_profile_success:ps,change_username:us,change_password:hs,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:fs,"2fa_already_enabled":"2FA is already enabled",scan_qr:gs,input_code:ms,verify:ys,"guest-tips":"You are currently visiting as a guest.",modify_nothing:bs,sso_login:ks,connect_sso:ws,disconnect_sso:vs},o=Object.assign({"./br.json":f,"./drivers.json":K,"./global.json":Pe,"./home.json":Ne,"./index.json":s,"./indexes.json":oo,"./login.json":_o,"./manage.json":bo,"./metas.json":Ro,"./settings.json":At,"./settings_other.json":Mt,"./storages.json":qt,"./tasks.json":ts,"./users.json":Ss}),Cs={};for(const e in o){const t=e.split("/")[1].split(".")[0];Cs[t]=o[e]}export{Cs as default};
