$(document).ready(function () { 
	//gets data from the YouTube API and displays it
	function getResults(searchTerm) {
		$.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyBhaXA9PC5S9CxudXUORc7dFf7JBR5nYcw",
				"q": searchTerm,
				"maxResults": 10
			},
			function (data) {
				if (data.pageInfo.totalResults == 0) {
					alert("No results!");
				}
				displayResults(data.items);
			}
		);
	}

	//results
	function displayResults(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			// Append results
			console.log(video.snippet.title);
			console.log(video.snippet.thumbnails.high.url);
			html = html + "<li><p>" + video.snippet.title +
				"</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;
		});
		$("#search-results ul").html(html);
	}

	//search term
	$("#search-form").submit(function (event) {
		event.preventDefault();
		getResults($("#search-term").val());
	});
});