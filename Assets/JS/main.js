const container = document.getElementById("light-novels");
$(window).on("load", formSite(data));

function formSite(data) {
	data.sort((a, b) => {
		console.log(data);
		return a.title > b.title ? 1 : -1;
	});
	for (var i = 0; i < data.length; i++) {
		var lightNovel = document.createElement("div");
		lightNovel.classList.add("light-novel");

		//Header
		var header = document.createElement("div");
		header.classList.add("header");
		var tag = document.createElement("p");
		var title = document.createElement("h2");
		var myStatus = document.createElement("p");
		title.classList.add("title");
		tag.classList.add("tag");
		myStatus.classList.add("status");
		if (data[i].myStatus == "Reading") {
			myStatus.classList.add("reading");
		} else if (data[i].myStatus == "Paused") {
			myStatus.classList.add("paused");
		} else if (data[i].myStatus == "Completed") {
			myStatus.classList.add("completed");
		} else if (data[i].myStatus == "Dropped") {
			myStatus.classList.add("dropped");
		} else if (data[i].myStatus == "Planning") {
			myStatus.classList.add("planning");
		} else {
			return;
		}
		title.textContent = data[i].title;
		tag.textContent = data[i].tag;
		myStatus.textContent = data[i].myStatus;
		header.appendChild(tag);
		header.appendChild(title);
		header.appendChild(myStatus);

		//Content
		var content = document.createElement("div");
		content.classList.add("content");

		//Image
		var image = document.createElement("div");
		var img = document.createElement("img");
		img.src = "Assets/Images/" + data[i].image;
		img.alt = "";
		image.classList.add("image");
		image.appendChild(img);

		//Index
		var index = document.createElement("div");
		index.classList.add("index");
		for (var j = 0; j < data[i].index.length; j++) {
			var value = document.createElement("div");
			value.classList.add("value");

			var color = document.createElement("div");
			var meaning = document.createElement("p");
			color.textContent = data[i].index[j].colorTxt;
			if (!data[i].index[j].color == "") {
				color.classList.add("color", data[i].index[j].color);
			} else {
				color.classList.add("color");
			}
			meaning.classList.add("meaning");
			meaning.textContent = data[i].index[j].meaning;

			value.appendChild(color);
			value.appendChild(meaning);
			index.appendChild(value);
		}

		//Progress
		var progress = document.createElement("div");
		var volume = document.createElement("div");
		var number = document.createElement("div");
		var numberTxt = document.createElement("h2");
		var completion = document.createElement("div");
		var completionTxt = document.createElement("h2");
		progress.classList.add("progress");
		volume.classList.add("volume");
		number.classList.add("number");
		completion.classList.add("completion");
		numberTxt.textContent = "V";
		completionTxt.textContent = "P";
		number.appendChild(numberTxt);
		completion.appendChild(completionTxt);
		volume.appendChild(number);
		volume.appendChild(completion);
		progress.appendChild(volume);
		var extraAdded = false;

		for (var j = 1; j <= data[i].progress.total; j++) {
			var volume = document.createElement("div");
			var number = document.createElement("div");
			var numberTxt = document.createElement("h2");
			var completion = document.createElement("div");
			volume.classList.add("volume");
			number.classList.add("number");
			completion.classList.add("completion");
			numberTxt.textContent = j;

			if (
				data[i].title == "Kuma Kuma Kuma Bear" &&
				j == 12 &&
				extraAdded === false
			) {
				number.classList.add("owned");
				completion.classList.add("completed");
				numberTxt.textContent = "11.5";

				number.appendChild(numberTxt);
				volume.appendChild(number);
				volume.appendChild(completion);
				progress.appendChild(volume);
				extraAdded = true;

				var volume = document.createElement("div");
				var number = document.createElement("div");
				var numberTxt = document.createElement("h2");
				var completion = document.createElement("div");
				volume.classList.add("volume");
				number.classList.add("number");
				completion.classList.add("completion");
				numberTxt.textContent = j;
			}

			if (j <= data[i].progress.owned) {
				number.classList.add("owned");
			} else if (j <= data[i].progress.translated) {
				number.classList.add("not-owned");
			} else {
				number.classList.add("no-translation");
			}

			if (j <= data[i].progress.read) {
				completion.classList.add("completed");
			}

			number.appendChild(numberTxt);
			volume.appendChild(number);
			volume.appendChild(completion);
			progress.appendChild(volume);
		}

		//Extra
		var extra = document.createElement("div");
		extra.classList.add("extra");
		for (var j = 0; j < data[i].extra.length; j++) {
			var stat = document.createElement("div");
			var title = document.createElement("div");
			var titleTxt = document.createElement("h2");
			var value = document.createElement("div");
			var valueTxt = document.createElement("h2");
			stat.classList.add("stat");
			title.classList.add("title");
			value.classList.add("value");
			titleTxt.textContent = data[i].extra[j].name;
			valueTxt.textContent = data[i].extra[j].valueTxt;

			if (data[i].extra[j].valueTxt == "Finished") {
				valueTxt.classList.add("finished");
			} else if (data[i].extra[j].valueTxt == "Ongoing") {
				valueTxt.classList.add("ongoing");
			} else if (data[i].extra[j].valueTxt == "Hiatus") {
				valueTxt.classList.add("hiatus");
			}

			title.appendChild(titleTxt);
			value.appendChild(valueTxt);
			stat.appendChild(title);
			stat.appendChild(value);
			extra.appendChild(stat);
		}

		//More Details
		var moreDetails = document.createElement("div");
		moreDetails.classList.add("more-details");
		for (var j = 1; j <= 2; j++) {
			var detail = document.createElement("div");
			detail.classList.add("detail");
			var title = document.createElement("h2");
			title.classList.add("title");
			if (j == 1) {
				title.textContent = "Chapters Read";
				var count = document.createElement("p");
				count.classList.add("count");
				count.textContent = data[i].details.chapters;
				detail.appendChild(title);
				detail.appendChild(count);
			}
			if (j == 2) {
				title.textContent = "Newest Vol Release Date";
				var dates = document.createElement("dates");
				dates.classList.add("dates");
				for (var j = 0; j < data[i].details.release.length; j++) {
					if (!data[i].details.release[j].lang == "") {
						var release = document.createElement("div");
						var lang = document.createElement("p");
						var date = document.createElement("p");
						lang.textContent = data[i].details.release[j].lang;
						date.textContent = data[i].details.release[j].date;
						release.classList.add("release");
						lang.classList.add("lang");
						date.classList.add("date");
						release.appendChild(lang);
						release.appendChild(date);
						dates.appendChild(release);
						detail.appendChild(title);
						detail.appendChild(dates);
					}
				}
			}
			moreDetails.appendChild(detail);
		}

		//Content Combiner
		content.appendChild(image);
		content.appendChild(index);
		content.appendChild(progress);
		content.appendChild(extra);
		content.appendChild(moreDetails);

		//Final Combiner
		lightNovel.appendChild(header);
		lightNovel.appendChild(content);
		container.appendChild(lightNovel);
	}
}
