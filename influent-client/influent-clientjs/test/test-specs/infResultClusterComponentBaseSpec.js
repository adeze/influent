/*
 * Copyright (C) 2013-2015 Uncharted Software Inc.
 *
 * Property of Uncharted(TM), formerly Oculus Info Inc.
 * http://uncharted.software/
 *
 * Released under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

define(
	[
		'views/components/resultClusterComponentBase',
		'lib/communication/accountsViewChannels'
	],
	function(
		fixture,
		accountsChannel
	) {

		//--------------------------------------------------------------------------------------------------------------

		describe('resultClusterComponentBase tests', function() {

			var container;
			var clusterData;
			var returnedCanvas;

			beforeEach(function () {

				container = $('<div>');

				clusterData = {
					clusterLabel:'Uganda, Kyenjojo'
				};

				returnedCanvas = fixture.addSearchResultCluster(
					'myXfId',
					container,
					clusterData,
					accountsChannel.RESULT_SELECTION_CHANGE,
					accountsChannel.RESULT_CLUSTER_VISIBILITY_CHANGE
				);
			});

			//----------------------------------------------------------------------------------------------------------

			it('Ensure the resultComponentBase fixture is defined', function () {
				expect(fixture).toBeDefined();
			});

			//----------------------------------------------------------------------------------------------------------

			it('Ensure results div is created', function () {
				expect(returnedCanvas).toExist();
			});

			//----------------------------------------------------------------------------------------------------------

			it('Ensure the addCollapseHandler is set up', function () {

				// Check initial state of the cluster (should be expanded)

				var accordian = container.find('.infResultClusterAccordionButton');
				expect(accordian).toExist();

				var cluster = container.find('.batchResults');
				expect(cluster).toExist();
				expect(cluster).toHaveClass('in');

				var icon = accordian.find('.infResultClusterAccordionButtonIcon');
				expect(icon).toExist();
				expect(icon).toHaveClass('glyphicon-chevron-up');

				// Set up spies and click the visibility button

				spyOn(aperture.pubsub, 'publish');

				var spyEvent = spyOnEvent(accordian, 'click');
				accordian.trigger('click');

				expect('click').toHaveBeenTriggeredOn(accordian);
				expect(spyEvent).toHaveBeenTriggered();

				// check that the cluster is collapsed and a pubsub is sent

				cluster = container.find('.batchResults');
				expect(cluster).toExist();
				expect(cluster).not.toHaveClass('in');

				icon = accordian.find('.infResultClusterAccordionButtonIcon');
				expect(icon).toExist();
				expect(icon).toHaveClass('glyphicon-chevron-down');

				expect(aperture.pubsub.publish).toHaveBeenCalledWith(
					accountsChannel.RESULT_CLUSTER_VISIBILITY_CHANGE,
					{
						xfId: 'myXfId',
						isExpanded: false
					}
				);

				// click the visibility button again

				accordian.trigger('click');

				expect('click').toHaveBeenTriggeredOn(accordian);
				expect(spyEvent).toHaveBeenTriggered();

				// check that the cluster is expanded and a pubsub is sent

				cluster = container.find('.batchResults');
				expect(cluster).toExist();
				expect(cluster).toHaveClass('in');

				icon = accordian.find('.infResultClusterAccordionButtonIcon');
				expect(icon).toExist();
				expect(icon).toHaveClass('glyphicon-chevron-up');

				expect(aperture.pubsub.publish).toHaveBeenCalledWith(
					accountsChannel.RESULT_CLUSTER_VISIBILITY_CHANGE,
					{
						xfId: 'myXfId',
						isExpanded: true
					}
				);
			});

			//----------------------------------------------------------------------------------------------------------

			it('Ensure the addSelectionClickHandler is set up', function () {

				var toggle = container.find('.infSelectGroupResults');
				expect(toggle).toExist();

				spyOn(aperture.pubsub, 'publish');

				spyOnEvent(toggle, 'click');

				toggle.find('input').prop('checked', 'checked');
				toggle.trigger('click');

				expect(aperture.pubsub.publish).toHaveBeenCalledWith(
					accountsChannel.RESULT_SELECTION_CHANGE,
					{
						xfId: 'myXfId',
						isSelected: toggle.find('input').prop('checked')
					}
				);

				toggle.find('input').removeProp('checked');
				toggle.trigger('click');

				expect(aperture.pubsub.publish).toHaveBeenCalledWith(
					accountsChannel.RESULT_SELECTION_CHANGE,
					{
						xfId: 'myXfId',
						isSelected: toggle.find('input').prop('checked')
					}
				);
			});
		});
	}
);