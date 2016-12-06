$(document).ready(function () { 
	function getResults(query) {
		var baseURL ="https://www.googleapis.com/youtube/v3/search";
		var searchQuery={
			"part": "snippet",
			"key": "AIzaSyChqDSBjn9OY1kqgl-_H5XYXB5pOhw-_34",
			"q": query 
		}
		$.getJSON(baseURL, searchQuery,
			function (data) {
				console.log(data);
				if (data.pageInfo.totalResults == 0) {
					alert("Sorry no results");
				}
				displaySearchResults(data.items);
			}

		);
	}

	function displaySearchResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			// append li to ul
			html = html + "<li><p>" + video.snippet.title +
				"</p><img src='" +  video.snippet.thumbnails.high.url + "'/></li>" ;

		});
		$("#search-results ul").html(html);
	}

	$("#search-form").submit(function (event) {
		event.preventDefault();
		getResults($("#query").val());
	});
});