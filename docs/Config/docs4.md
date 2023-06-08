# 鉴赏图片参考文档

> 📌为了不污染HuggingFace开源社区的空间，我们强烈建议使用已有的空间接口，你可以不需要自己部署，直接使用以下命令即可使用本功能，配置完成后请记得重启生效：
>
> ```javascript
> #ap设置鉴赏接口https://nocrypt-deepdanbooru-string.hf.space/api/predict
> ```

如果您仍需要自己部署，可继续查看以下内容

***

## 步骤一

使用浏览器打开Huggingface网站：

[Hugging Face – The AI community building the future.](https://huggingface.co/ "Hugging Face – The AI community building the future.")

![Huggingface首页](image/image_lqejdl3pqn.jpg "Huggingface首页")

***

## 步骤二

点击右上角**Sign Up**进行注册

> 若您已经注册过Huggingface账号，请跳转至步骤六

输入自己的邮箱，并设置好密码，点击Next

![Huggingface注册页](image/image_pBsi24UYi8.jpg "Huggingface注册页")

## 步骤三

设置自己的Username与Full name，并勾选

-   [x] I have read and agree with the Terms of Service and the Code of Conduct

最后点击Creat Account

![Huggingface注册页](image/image_O4iZohR56G.jpg "Huggingface注册页")

***

## 步骤四

点击页面黄条（Please check your email address for a confirmation link）右侧的Resend confirmation email按钮，将验证信息发送到你的邮箱

![Huggingface邮箱验证](image/image_HzFz2uB8s6.jpg "Huggingface邮箱验证")

***

## 步骤五

登录邮箱，打开Hugging Face的邮件，里面有一条链接，打开它

![Huggingface邮箱验证成功](image/image_v5vVsMa2ek.jpg "Huggingface邮箱验证成功")

页面绿条显示Your email address has been verified successfully.就意味着您注册成功了

***

## 步骤六

用相同浏览器打开下方网站：

[DeepDanbooru String - a Hugging Face Space by NoCrypt](https://huggingface.co/spaces/NoCrypt/DeepDanbooru_string "DeepDanbooru String - a Hugging Face Space by NoCrypt")

![DeepDanbooru\_string空间](image/image_kGHo61FZvG.jpg "DeepDanbooru_string空间")

***

## 步骤七

点击右上角竖着排列的三个点，选择第四项Duplicate this Space

![克隆空间](image/2_UHtqchM3Jh.jpg "克隆空间")

***

## 步骤八

修改Visibility，将Private改成Public，然后点Duplicate Space按钮即可

![修改权限](image/image_hAal1jJWxj.jpg "修改权限")

***

## 步骤九

点击Files，选择文件列表中的app.py，单击它，在上方点击edit进行修改

![修改模型仓库引用](image/image_TWyLgpZLFL.jpg "修改模型仓库引用")

***

## 步骤十

将第24行中的NoCrypt修改成CikeyQI后，划到最低端的Commit changes to main按钮提交修改

![修改](image/image_1qTeGEYFMH.jpg "修改")

![提交](image/image_5uEA52zsEw.jpg "提交")

***

## 步骤十一

点击Settings，滑到Repository secrets，点击New secret按钮，在Name框输入`TOKEN`，在Secret value框输入`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`，然后点击Add new secret按钮

![填写密钥](image/image_YBM-EyeWfu.jpg "填写密钥")

***

## 步骤十二

等待其蓝色的Building变成绿色的Running

![正在构建](image/image_vbcWTVMGH4.jpg "正在构建")

![构建成功](image/image_UKdUiW0A6R.jpg "构建成功")

***

## 步骤十三

下滑页面至最低端，最下方有一个view api，点击它，在Full URL的右侧就是你的API了，点击copy即可复制

![展示API](image/image_gcDLJr56_A.jpg "展示API")

![复制API](image/image_ofMJhKfa7D.jpg "复制API")

## 步骤十四

对机器人发送  #ap设置鉴赏接口你的接口
