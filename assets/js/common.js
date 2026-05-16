// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function (element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function (element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({ visibleOnly: true, ...lazyLoadOptions });
    $('div.lazy.always-load').Lazy({ visibleOnly: false, ...lazyLoadOptions });

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
})

// Toggle abstract/tldr for publications
function toggleAbstract(event, itemId) {
    event.preventDefault();
    var tldrElement = $('.pub-tldr-' + itemId);
    var abstractElement = $('.pub-abstract-' + itemId);

    if (tldrElement.is(':visible')) {
        tldrElement.slideUp(300, function () {
            $(this).hide();
            abstractElement.hide().fadeIn(400).css('display', 'block');
        });
    } else {
        abstractElement.slideUp(300, function () {
            $(this).hide();
            tldrElement.hide().fadeIn(400).css('display', 'block');
        });
    }
}

// Topic filter for publications page
function initTopicFilter() {
    var chips = document.querySelectorAll('.topic-chip');
    if (!chips.length) return;
    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            var topic = chip.dataset.topic;
            chips.forEach(function (c) {
                c.classList.toggle('active', c === chip);
            });
            applyTopicFilter(topic);
        });
    });
}

function applyTopicFilter(topic) {
    document.querySelectorAll('.pub-wrapper').forEach(function (w) {
        var topics = (w.dataset.topics || '').split(' ').filter(Boolean);
        var visible = topic === 'all' || topics.indexOf(topic) !== -1;
        w.classList.toggle('filtered-out', !visible);
    });
    document.querySelectorAll('.pub-section-block').forEach(function (section) {
        var wrappers = section.querySelectorAll('.pub-wrapper');
        var hasVisible = Array.prototype.some.call(wrappers, function (w) {
            return !w.classList.contains('filtered-out');
        });
        section.style.display = hasVisible ? '' : 'none';
        var h2 = section.querySelector('h2');
        if (h2) {
            h2.style.display = (topic === 'all') ? '' : 'none';
        }
        var id = section.dataset.sectionId;
        if (id) {
            var link = document.querySelector('#navbar-year a[href="#' + id + '"]');
            if (link) link.style.display = hasVisible ? '' : 'none';
        }
    });
    var sidebar = document.getElementById('navbar-year');
    if (sidebar && sidebar.parentElement) {
        if (topic === 'all') {
            sidebar.parentElement.style.removeProperty('display');
        } else {
            sidebar.parentElement.style.setProperty('display', 'none', 'important');
        }
    }
    // Force-load lazy images in newly visible items (the lazy plugin doesn't
    // auto-detect sections that toggle from hidden -> visible).
    document.querySelectorAll('.pub-wrapper:not(.filtered-out) img.lazy[data-src]').forEach(function (img) {
        if (img.getAttribute('src') !== img.dataset.src) {
            img.setAttribute('src', img.dataset.src);
        }
    });
}

document.addEventListener('DOMContentLoaded', initTopicFilter);
